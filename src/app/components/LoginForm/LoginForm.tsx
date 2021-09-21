import { Form, Formik } from 'formik';
import React from 'react';
import Button from '../Button/Button';
import Input from '../FormikInput/FormikInput';
import styles from './LoginForm.module.css';
import * as Yup from 'yup';

type LoginValues = {
  email: string;
  password: string;
};

export type LoginFormProps = {
  handleSubmit: (values: LoginValues) => void;
};

const LoginForm = ({ handleSubmit }: LoginFormProps): JSX.Element => {
  return (
    <div>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email('Email Adresse ist ungültig')
            .required('Bitte gib deine Email ein'),
          password: Yup.string().required('Bitte gib dein Passwort ein'),
        })}
        onSubmit={(values) => {
          handleSubmit(values);
        }}
      >
        <Form className={styles.form}>
          <Input id="email" name="email" type="text" placeholder="Email" />

          <Input
            id="password"
            name="password"
            type="password"
            placeholder="Passwort"
          />
          <Button type="primary" size="l" isSubmit={true}>
            Login
          </Button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
