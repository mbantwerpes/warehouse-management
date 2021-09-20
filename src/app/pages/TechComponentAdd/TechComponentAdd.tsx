import React from 'react';
import { useHistory } from 'react-router';
import Typography from '../../components/Typography/Typography';
import styles from './TechComponentAdd.module.css';
import Button from '../../components/Button/Button';
import { MdKeyboardArrowLeft } from 'react-icons/md';
import TechComponentForm from '../../components/TechComponentForm/TechComponentForm';
import { TechComponentForFrontend } from '../../../lib/types/types';
import { useMutation } from 'react-query';
import axios from 'axios';
import { toast } from 'react-toastify';

const TechComponentAdd = (): JSX.Element => {
  const history = useHistory();

  const redirectToTechComponentList = () => {
    history.push('/');
  };

  const addTechComponent = async (techComponent: TechComponentForFrontend) => {
    return await axios.post(`/api/techcomponent`, techComponent);
  };

  const addTechComponentMutation = useMutation(addTechComponent);

  const handleSubmit = async (techComponent: TechComponentForFrontend) => {
    addTechComponentMutation.mutate(techComponent);

    console.log(addTechComponentMutation.isIdle);
    console.log(addTechComponentMutation.isLoading);
    console.log(addTechComponentMutation.isError);
    console.log(addTechComponentMutation.isSuccess);

    toast.info('Bauteil erfolgreich angelegt', {
      theme: 'colored',
      position: toast.POSITION.BOTTOM_CENTER,
    });

    redirectToTechComponentList();
  };

  return (
    <div className={styles.container}>
      <Button
        type="secondary"
        size="none"
        onClick={redirectToTechComponentList}
        className={styles.backButton}
      >
        <MdKeyboardArrowLeft size={32} />
      </Button>
      <Typography type="header" size="xl">
        Bauteil anlegen.
      </Typography>
      <TechComponentForm handleSubmit={handleSubmit} />
    </div>
  );
};

export default TechComponentAdd;
