import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import user from './lib/routes/user';
import techcomponent from './lib/routes/techComponent';
import order from './lib/routes/order';

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());

app.use('/api/techcomponent', techcomponent);
app.use('/api/user', user);
app.use('/api/order', order);

app.use('/storybook', express.static('dist/storybook'));

app.use(express.static('dist/app'));

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
