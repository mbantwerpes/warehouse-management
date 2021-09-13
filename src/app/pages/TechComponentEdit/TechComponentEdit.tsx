import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import Typography from '../../components/Typography/Typography';
import styles from './TechComponentEdit.module.css';
import Button from '../../components/Button/Button';
import { MdKeyboardArrowLeft } from 'react-icons/md';
import { TechComponentForFrontend } from '../../../lib/types';
import TechComponentForm from '../../components/TechComponentForm/TechComponentForm';
import { useParams } from 'react-router-dom';
import useTechComponent from '../../hooks/useTechComponent';

const TechComponentEdit = (): JSX.Element => {
  const history = useHistory();

  const { id }: { id: string } = useParams();

  const [titleValue, setTitleValue] = useState<string>('');
  const [artNrValue, setArtNrValue] = useState<string>('');
  const [locationValue, setLocationValue] = useState<string>('');
  const [descriptionValue, setDescriptionValue] = useState<string>('');
  const [amountValue, setAmountValue] = useState<string>('');

  // Fetch techComponent and set state values
  const { techComponent } = useTechComponent(id);
  useEffect(() => {
    setTitleValue(techComponent?.title || '');
    setArtNrValue(techComponent?.artNr || '');
    setLocationValue(techComponent?.location || '');
    setDescriptionValue(techComponent?.description || '');
    setAmountValue(techComponent?.amount.toString() || '');
  }, [techComponent]);

  const handleBackButtonClick = () => {
    history.push(`/techcomponent/${id}`);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const postData: TechComponentForFrontend = {
      title: titleValue,
      description: descriptionValue,
      location: locationValue,
      amount: Number(amountValue),
      artNr: artNrValue,
    };

    const response = await fetch(`/api/techcomponent/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(postData),
    });

    console.log(await response.json());

    history.push(`/techcomponent/${id}`);
  };

  return (
    <div className={styles.container}>
      <Button
        type="secondary"
        size="none"
        onClick={handleBackButtonClick}
        className={styles.backButton}
      >
        <MdKeyboardArrowLeft size={32} />
      </Button>
      <Typography type="header" size="xl">
        Bauteil bearbeiten.
      </Typography>
      <TechComponentForm
        isEdit={true}
        titleValue={titleValue}
        artNrValue={artNrValue}
        locationValue={locationValue}
        descriptionValue={descriptionValue}
        amountValue={amountValue}
        onSubmit={handleSubmit}
        setTitleValue={setTitleValue}
        setArtNrValue={setArtNrValue}
        setLocationValue={setLocationValue}
        setDescriptionValue={setDescriptionValue}
        setAmountValue={setAmountValue}
      ></TechComponentForm>
    </div>
  );
};

export default TechComponentEdit;
