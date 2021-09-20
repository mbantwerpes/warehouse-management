import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import Typography from '../../components/Typography/Typography';
import styles from './TechComponentEdit.module.css';
import Button from '../../components/Button/Button';
import { MdKeyboardArrowLeft } from 'react-icons/md';
import { useParams } from 'react-router-dom';
import useTechComponent from '../../hooks/useTechComponent';
import TechComponentForm from '../../components/TechComponentForm/TechComponentForm';
import { TechComponentForFrontend } from '../../../lib/types/types';
import axios from 'axios';
import { useMutation } from 'react-query';

const TechComponentEdit = (): JSX.Element => {
  const history = useHistory();

  const { id }: { id: string } = useParams();

  const [isLoading, setIsLoading] = useState(true);
  const [titleValue, setTitleValue] = useState<string>('');
  const [artNrValue, setArtNrValue] = useState<string>('');
  const [locationValue, setLocationValue] = useState<string>('');
  const [descriptionValue, setDescriptionValue] = useState<string>('');
  const [amountValue, setAmountValue] = useState<number>();

  const { data: techComponent } = useTechComponent(id);
  useEffect(() => {
    if (techComponent !== null) setIsLoading(false);
    setTitleValue(techComponent?.title || '');
    setArtNrValue(techComponent?.artNr || '');
    setLocationValue(techComponent?.location || '');
    setDescriptionValue(techComponent?.description || '');
    setAmountValue(techComponent?.amount || 0);
  }, [techComponent]);

  const redirectToTechComponentDetail = () => {
    history.push(`/techcomponent/${id}`);
  };

  const editTechComponent = async (techComponent: TechComponentForFrontend) => {
    const { data } = await axios.put(`/api/techcomponent/${id}`, techComponent);
    return data;
  };

  const editTechComponentMutation = useMutation(editTechComponent);

  const handleSubmit = async (techComponent: TechComponentForFrontend) => {
    editTechComponentMutation.mutate(techComponent);

    redirectToTechComponentDetail();
  };

  return (
    <div className={styles.container}>
      <Button
        type="secondary"
        size="none"
        onClick={redirectToTechComponentDetail}
        className={styles.backButton}
      >
        <MdKeyboardArrowLeft size={32} />
      </Button>
      <Typography type="header" size="xl">
        Bauteil bearbeiten.
      </Typography>
      {!isLoading && (
        <TechComponentForm
          isEdit={true}
          handleSubmit={handleSubmit}
          titleValue={titleValue}
          artNrValue={artNrValue}
          locationValue={locationValue}
          descriptionValue={descriptionValue}
          amountValue={amountValue}
        />
      )}
    </div>
  );
};

export default TechComponentEdit;
