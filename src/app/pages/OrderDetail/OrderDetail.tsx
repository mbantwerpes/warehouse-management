import React from 'react';
import { MdKeyboardArrowLeft } from 'react-icons/md';
import { useHistory, useParams } from 'react-router-dom';
import Button from '../../components/Button/Button';
import TechComponentCard from '../../components/TechComponentCard/TechComponentCard';
import Typography from '../../components/Typography/Typography';
import useOrder from '../../hooks/useOrder';
import useTechComponents from '../../hooks/useTechComponents';
import styles from './OrderDetail.module.css';
import placeholderImage from '../../../assets/images/placeholder_image.jpeg';

const OrderDetail = (): JSX.Element => {
  const history = useHistory();

  const handleBackButtonClick = () => {
    history.push('/order');
  };

  const { id }: { id: string } = useParams();

  const { order } = useOrder(id);

  const ids: string[] | undefined = order?.techComponents.map(
    (techComponent) => techComponent.techComponentId
  );

  const { techComponents } = useTechComponents(undefined, ids);

  console.log(techComponents);

  return (
    <div className={styles.container}>
      <header>
        <Button
          type="secondary"
          size="m"
          onClick={handleBackButtonClick}
          className={styles.backButton}
        >
          <MdKeyboardArrowLeft size={32} />
        </Button>
        <Typography type="header" size="xl">
          Ausleihauftrag.
        </Typography>
      </header>
      <section>
        <div className={styles.techComponentDetails}>
          <Typography type="header" size="m">
            Name:
          </Typography>
          <Typography type="text" size="l">
            {order?._id}
          </Typography>
        </div>
        <div className={styles.techComponentDetails}>
          <Typography type="header" size="m">
            Erstellt:
          </Typography>
          <Typography type="text" size="l">
            {order?.crAt}
          </Typography>
        </div>
        <div className={styles.techComponentDetails}>
          <Typography type="header" size="m">
            Rückgabefrist:
          </Typography>
          <Typography type="text" size="l">
            {order?.returnPeriod ? order.returnPeriod : '-'}
          </Typography>
        </div>
        <div className={styles.techComponentDetails}>
          <Typography type="header" size="m">
            Status:
          </Typography>
          <Typography type="text" size="l">
            {order?.status}
          </Typography>
        </div>
      </section>
      <section className={styles.content}>
        {techComponents?.map((techComponent) => {
          const orderTechComponent = order?.techComponents.find(
            (orderTechComponent) =>
              orderTechComponent.techComponentId === techComponent._id
          );
          if (orderTechComponent) {
            techComponent.amount = orderTechComponent.amount;
          }
          return (
            <TechComponentCard
              key={techComponent._id}
              id={techComponent._id}
              layout="horizontal"
              amount={techComponent.amount}
              description={techComponent.description}
              image={placeholderImage}
              title={techComponent.title}
            />
          );
        })}
      </section>
      <Button
        type="primary"
        size="l"
        onClick={() => console.log('placeholder')}
      >
        Ausleihauftrag bestätigen
      </Button>
    </div>
  );
};

export default OrderDetail;
