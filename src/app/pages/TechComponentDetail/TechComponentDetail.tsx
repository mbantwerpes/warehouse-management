import React from 'react';
import { MdKeyboardArrowLeft, MdDelete } from 'react-icons/md';
import { useHistory, useParams } from 'react-router-dom';
import Button from '../../components/Button/Button';
import Typography from '../../components/Typography/Typography';
import styles from './TechComponentDetail.module.css';
import placeholderImage from '../../../assets/images/placeholder_image.jpeg';
import useTechComponent from '../../hooks/useTechComponent';
import { useModal } from '../../hooks/useModal';

const TechComponentDetail = (): JSX.Element => {
  const { show, hide, RenderModal: RenderDeleteModal } = useModal();

  const { id }: { id: string } = useParams();

  const { techComponent } = useTechComponent(id);

  const history = useHistory();

  const handleBackButtonClick = () => {
    history.push('/');
  };

  return (
    <div className={styles.container}>
      <Button type="secondary" size="m" onClick={handleBackButtonClick}>
        <MdKeyboardArrowLeft size={32} />
      </Button>
      <Typography type="header" size="xl">
        {techComponent?.title}
      </Typography>
      <div className={styles.content}>
        <img src={placeholderImage} alt="placeholder" className={styles.img} />
        <Typography type="header" size="m">
          Verfügbar: {techComponent?.amount}
        </Typography>
        <div>
          <Typography type="header" size="m">
            Artikelnummer
          </Typography>
          <Typography type="text" size="m">
            {techComponent?.artNr}
          </Typography>
        </div>
        <div>
          <Typography type="header" size="m">
            Beschreibung
          </Typography>
          <Typography type="text" size="m">
            {techComponent?.description}
          </Typography>
        </div>
        <div>
          <Typography type="header" size="m">
            Ortsangabe
          </Typography>
          <Typography type="text" size="m">
            {techComponent?.location}
          </Typography>
        </div>
      </div>
      <div className={styles.buttonGroup}>
        <Button type="error" size="l" onClick={show}>
          <MdDelete size={24} />
        </Button>
        <Button
          type="primary"
          size="l"
          onClick={() => console.log('placeholder')}
        >
          Bearbeiten
        </Button>
      </div>
      <RenderDeleteModal title="Delete">Test</RenderDeleteModal>
    </div>
  );
};

export default TechComponentDetail;
