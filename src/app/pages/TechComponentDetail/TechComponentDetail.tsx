import React from 'react';
import { MdKeyboardArrowLeft, MdDelete } from 'react-icons/md';
import { useHistory } from 'react-router-dom';
import Button from '../../components/Button/Button';
import Typography from '../../components/Typography/Typography';
import styles from './TechComponentDetail.module.css';
import placeholderImage from '../../../assets/images/placeholder_image.jpeg';

const TechComponentDetail = (): JSX.Element => {
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
        Microcontroller A-30
      </Typography>
      <div className={styles.content}>
        <img src={placeholderImage} alt="placeholder" className={styles.img} />
        <Typography type="header" size="m">
          Verfügbar: 10
        </Typography>
        <div>
          <Typography type="header" size="m">
            Artikelnummer
          </Typography>
          <Typography type="text" size="m">
            3284zhfdsakjfz348
          </Typography>
        </div>
        <div>
          <Typography type="header" size="m">
            Beschreibung
          </Typography>
          <Typography type="text" size="m">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quia
            incidunt dolorum animi? Atque officia, laudantium porro molestiae
            eaque nulla, sequi exercitationem perferendis id voluptates dolor
            corrupti labore consequatur quasi!
          </Typography>
        </div>
        <div>
          <Typography type="header" size="m">
            Ortsangabe
          </Typography>
          <Typography type="text" size="m">
            3. Schrank rechts
          </Typography>
        </div>
      </div>
      <div className={styles.buttonGroup}>
        <Button
          type="error"
          size="l"
          onClick={() => console.log('placeholder')}
        >
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
    </div>
  );
};

export default TechComponentDetail;
