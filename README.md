# Lagerverwaltung

WebApp to manage the loan desk of an electrical engineering laboratory in an university.

## Table of contents

- [General information](#general-information)
- [Setup](#setup)
- [Technologies](#technologies)

## General information

With this app you can manage the loan desk of an electrical engineering laboratory in an university. Professors (admins) can add tech components, like microcontrollers, resistances and so on, to the system. They can also create new users, which then can loan the tech components through a shopping cart system.

## Setup

Clone this repo and run `npm install` to install all the dependencies.

Add a .env file to the root of the project and add the following content:

- MONGO_DB_URL=[Your connection link to MongoDB Atlas]
- PORT=[Port for the server]
- JWT_SECRET=[Secret that you want to encrypt the JWT's with]

Run `npm run server:dev` to start the server.

Run `npm run client:dev` to start the client and then you can access it at `localhost:3000`.

If you want to work with storybook, then you can start it with `npm run storybook:dev`.

A production build can be build with `npm run build`.

## Technologies

- Vite
- Husky
- React
- Storybook
- React Router
- React Query
- Formik
- YUP
- Node JS Express
- MongoDB wiht MongoDB Atlas
- Typescript
- CSS Modules
