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

const TechComponentAdd = (): JSX.Element => {
  const history = useHistory();

  const redirectToTechComponentList = () => {
    history.push('/');
  };

  const addTechComponent = async (techComponent: TechComponentForFrontend) => {
    const { data } = await axios.post(`/api/techcomponent`, techComponent);
    return data;
  };

  const addTechComponentMutation = useMutation(addTechComponent);

  const handleSubmit = async (values: TechComponentForFrontend) => {
    addTechComponentMutation.mutate(values);

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
