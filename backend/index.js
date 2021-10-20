require('dotenv').config();
const express = require('express');
const debug = require('debug')('server');
const morgan = require('morgan');

const cors = require('cors');

require('./src/config/mongooseConfig');
require('./src/config/passport-strategies/localStrategy');

const server = express();
const port = process.env.PORT || 5000;

server.use(cors());
server.use(morgan('dev'));
server.use(express.json());

require('./src/config/passportConfig')(server);

const authRouter = require('./src/routes/authRouter');
const userRouter = require('./src/routes/userRouter');
const studentRouter = require('./src/routes/studentRouter');

server.use('/api/auth/', authRouter);
server.use('/api/users/', userRouter);
server.use('/api/students/', studentRouter);

server.listen(
  port,
  () => debug(`Server is running on ${(`http://localhost:${port}`)}`),
);
