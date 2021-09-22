import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import styles from './TechComponentForm.module.css';
import Button from '../Button/Button';
import Input from '../FormikInput/FormikInput';
import Textarea from '../FormikTextarea/FormikTextarea';
import { TechComponentForFrontend } from '../../../lib/types/types';

type TechComponentFormProps = {
  isEdit?: boolean;
  handleSubmit: (values: TechComponentForFrontend) => void;
  titleValue?: string;
  artNrValue?: string;
  locationValue?: string;
  descriptionValue?: string;
  amountValue?: number;
};

const TechComponentForm = ({
  isEdit = false,
  handleSubmit,
  titleValue = '',
  artNrValue = '',
  locationValue = '',
  descriptionValue = '',
  amountValue = 1,
}: TechComponentFormProps): JSX.Element => {
  return (
    <div className={styles.container}>
      <Formik
        initialValues={{
          title: titleValue,
          artNr: artNrValue,
          location: locationValue,
          description: descriptionValue,
          amount: amountValue,
          file: undefined,
        }}
        validationSchema={Yup.object({
          title: Yup.string()
            .max(50, 'Name kann nicht länger als 50 Zeichen sein')
            .required('Bitte gib einen Namen an'),
          artNr: Yup.string().required('Bitte gib eine Artikelnummer an'),
          location: Yup.string()
            .max(50, 'Ort kann nicht länger als 50 Zeichen sein')
            .required('Bitte gib einen Ort an'),
          description: Yup.string().max(
            250,
            'Beschreibung kann nicht länger als 250 Zeichen sein'
          ),
          amount: Yup.number()
            .min(1, 'Menge muss mehr als 0 sein')
            .max(10000, 'Menge muss weniger als 10000 sein')
            .required('Bitte gib eine Menge an'),
        })}
        onSubmit={(
          values: TechComponentForFrontend,
          { setSubmitting, resetForm }
        ) => {
          setTimeout(async () => {
            handleSubmit(values);

            resetForm();
            setSubmitting(false);
          }, 400);
        }}
      >
        {(props) => (
          <Form className={styles.form}>
            <div className={styles.fields}>
              <Input
                id="title"
                name="title"
                label="Name"
                type="text"
                placeholder="Name"
                required={true}
              />

              <Input
                id="artNr"
                name="artNr"
                label="Artikelnummer"
                type="text"
                placeholder="Artikelnummer"
                required={true}
              />

              <Input
                id="location"
                name="location"
                label="Ortsangabe"
                type="text"
                placeholder="Ortsangabe"
                required={true}
              />

              <Textarea
                id="description"
                name="description"
                label="Beschreibung"
                placeholder="Beschreibung..."
                required={true}
              />

              <Input
                id="amount"
                name="amount"
                label="Anzahl"
                type="number"
                required={true}
              />

              {/* <Input
              id="file"
              name="file"
              label="Bild"
              type="file"
              required={true}
            /> */}
              <input
                id="file"
                name="file"
                type="file"
                onChange={(event) => {
                  props.setFieldValue('file', event.currentTarget.files[0]);
                }}
              />
            </div>
            <Button type="primary" size="l" isSubmit={true}>
              {isEdit ? 'Änderungen speichern' : 'Bauteil anlegen'}
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default TechComponentForm;
