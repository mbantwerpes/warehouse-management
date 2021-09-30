import axios from 'axios';
import React from 'react';
import { useMutation } from 'react-query';
import { useHistory } from 'react-router';
import { toast } from 'react-toastify';
import Button from '../../components/Button/Button';
import Navbar from '../../components/Navbar/Navbar';
import Typography from '../../components/Typography/Typography';
import { useUserContext } from '../../context/UserContext';
import useKpi from '../../hooks/useKpi';
import styles from './Dashboard.module.css';
import {
  MdShoppingCart,
  MdUndo,
  MdDoneAll,
  MdCreateNewFolder,
} from 'react-icons/md';
import DashboardCard from '../../components/DashboardCard/DashboardCard';

const Dashboard = (): JSX.Element => {
  const user = useUserContext();

  const { data: kpiData } = useKpi(user.id, user.role);

  const history = useHistory();

  const logout = async () => {
    const { data } = await axios.get('/api/auth/logout');
    return data;
  };

  const logoutMutation = useMutation(logout);

  const handleLogout = () => {
    logoutMutation.mutate();

    toast.info('Erfolgreich ausgeloggt', {
      theme: 'colored',
      position: toast.POSITION.BOTTOM_CENTER,
    });

    history.push('/login');
  };

  return (
    <div className={styles.layout}>
      <div className={styles.container}>
        <div className={styles.header}>
          <Typography type="header" size="xl">
            Dashboard
          </Typography>
          <Button type="primary" size="m" onClick={handleLogout}>
            Logout
          </Button>
        </div>
        <Typography type="header" size="l">
          Willkommen
        </Typography>
        {user.role === 'admin' && (
          <div className={styles.kpiList}>
            <Typography type="header" size="m">
              Bauteile
            </Typography>
            <DashboardCard
              amount={kpiData?.techComponentsAmount}
              title="Anzahl"
              icon={<MdCreateNewFolder size={24} />}
            />
          </div>
        )}
        <div className={styles.kpiList}>
          <Typography type="header" size="m">
            Ausleihaufträge
          </Typography>
          <DashboardCard
            amount={kpiData?.reservedAmount}
            title="Reserviert"
            icon={<MdShoppingCart size={24} />}
          />
          <DashboardCard
            amount={kpiData?.bookedAmount}
            title="Bestätigt"
            icon={<MdDoneAll size={24} />}
          />
          <DashboardCard
            amount={kpiData?.returnedAmount}
            title="Zurückgegeben"
            icon={<MdUndo size={24} />}
          />
        </div>
      </div>
      <Navbar active="home" />
    </div>
  );
};

export default Dashboard;
