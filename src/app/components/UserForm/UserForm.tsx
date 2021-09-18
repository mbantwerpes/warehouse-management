import { Form, Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import { UserForFrontend } from '../../../lib/types/types';
import Button from '../Button/Button';
import Input from '../FormikInput/FormikInput';
import Select from '../Select/Select';
import styles from './UserForm.module.css';

export type UserFormProps = {
  handleSubmit: (values: UserForFrontend) => void;
  isEdit?: boolean;
  nameValue?: string;
  passwordValue?: string;
  grpNameValue?: string;
  grpNrValue?: number;
  matrNumberValue?: string;
  emailValue?: string;
  telephoneValue?: string;
  roleValue?: 'admin' | 'student';
};

const UserForm = ({
  handleSubmit,
  isEdit = false,
  nameValue = '',
  passwordValue = '',
  grpNameValue = '',
  grpNrValue = 0,
  matrNumberValue = '',
  emailValue = '',
  telephoneValue = '',
  roleValue = 'student',
}: UserFormProps): JSX.Element => {
  return (
    <div className={styles.container}>
      <Formik
        initialValues={{
          name: nameValue,
          password: passwordValue,
          grpName: grpNameValue,
          grpNr: grpNrValue,
          matrNumber: matrNumberValue,
          email: emailValue,
          telephone: telephoneValue,
          role: roleValue,
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .max(50, 'Name kann nicht länger als 50 Zeichen sein')
            .required('Bitte gib einen Namen an'),
          password: Yup.string().required('Bitte gib ein Passwort an'),
          grpName: Yup.string().max(
            50,
            'Gruppenname kann nicht länger als 50 Zeichen sein'
          ),
          grpNr: Yup.number()
            .min(1, 'Gruppennummer muss mehr als 0 sein')
            .max(100000, 'Gruppennummer muss weniger als 100000 sein'),
          matrNumber: Yup.string()
            .max(15, 'Matrikelnummer kann nicht länger als 15 Zeichen sein')
            .required('Bitte gib eine Matrikelnummer an'),
          email: Yup.string()
            .email('Email Adresse ist ungültig')
            .required('Bitte gib eine Email Adresse an'),
          telephone: Yup.string().max(
            25,
            'Telefonnummer kann nicht länger als 25 Zeichen sein'
          ),
          role: Yup.string()
            .oneOf(['student', 'admin'], 'Rolle ist ungültig')
            .required('Bitte wähl eine Rolle aus'),
        })}
        onSubmit={(values: UserForFrontend, { setSubmitting, resetForm }) => {
          setTimeout(async () => {
            handleSubmit(values);

            resetForm();
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form className={styles.form}>
          <div className={styles.fields}>
            <Input
              id="name"
              name="name"
              label="Name"
              type="text"
              placeholder="Name"
              required={true}
            />

            <Input
              id="password"
              name="password"
              label="Passwort"
              type="text"
              placeholder="Passwort"
              required={true}
            />

            <Input
              id="grpName"
              name="grpName"
              label="Gruppenname"
              type="text"
              placeholder="Gruppenname"
            />

            <Input
              id="grpNr"
              name="grpNr"
              label="Gruppennummer"
              type="number"
            />

            <Input
              id="matrNumber"
              name="matrNumber"
              label="Matrikelnummer"
              type="text"
              placeholder="Matrikelnummer"
              required={true}
            />

            <Input
              id="email"
              name="email"
              label="Email"
              type="email"
              placeholder="Email"
              required={true}
            />

            <Input
              id="telephone"
              name="telephone"
              label="Telefonnummer"
              type="text"
              placeholder="Telefonnummer"
            />

            <Select id="role" name="role" label="Rolle" required={true}>
              <option value="">Rolle auswählen</option>
              <option value="student">Student</option>
              <option value="admin">Admin</option>
            </Select>
          </div>

          <Button type="primary" size="l" isSubmit={true}>
            {isEdit ? 'Änderungen speichern' : 'Nutzer anlegen'}
          </Button>
        </Form>
      </Formik>
    </div>
  );
};

export default UserForm;
