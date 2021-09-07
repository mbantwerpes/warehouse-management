import dotenv from 'dotenv';
dotenv.config();

import express from 'express';

import techcomponent from './lib/routes/techComponent';

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());

app.use('/api/techcomponent', techcomponent);

app.get('/api', (_request, response) => {
  response.json({ message: 'Hello API!' });
});

app.use('/storybook', express.static('dist/storybook'));

app.use(express.static('dist/app'));

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
