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
    const formData = new FormData();

    formData.append('title', techComponent.title);
    formData.append('artNr', techComponent.artNr);
    formData.append('location', techComponent.location);
    formData.append('description', techComponent.description);
    formData.append('amount', techComponent.amount.toString());
    if (techComponent.file) {
      formData.append('file', techComponent.file);
    }

    return await axios.post(`/api/techcomponent`, formData);
  };

  const addTechComponentMutation = useMutation(addTechComponent);

  const handleSubmit = async (techComponent: TechComponentForFrontend) => {
    addTechComponentMutation.mutate(techComponent);

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
      <Typography type="header" size="xl" className={styles.headline}>
        Bauteil anlegen.
      </Typography>
      <TechComponentForm handleSubmit={handleSubmit} />
    </div>
  );
};

export default TechComponentAdd;
