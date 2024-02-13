// eslint-disable-next-line import/no-extraneous-dependencies
require('express-async-errors');
const express = require('express');

const routes = require('./routes');
const cors = require('./app/middlewares/cors');
const errorHandler = require('./app/middlewares/errorHandler');

const app = express();

app.use(express.json());
app.use(cors);
app.use(routes);
app.use(errorHandler);

// eslint-disable-next-line no-console
app.listen(3001, () => console.log('🔥 Server started on http://localhost:3001'));
