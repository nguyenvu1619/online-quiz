import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import http from 'http';
dotenv.config({ path: path.join(__dirname, '../.env') });
import exceptionMiddleware from './middlewares/exception.middlewares'
import routers from './routes'
import { createError, ErrorCodeNames } from './common/error-codes';
import sequelize from './config/database.config';
import { logger } from './common/log';
import { decodeToken as  tokenMiddleware } from './middlewares/token.middleware';

const app: express.Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api/v1', tokenMiddleware, routers);

// catch 404 and forward to error handler
app.use((_req, _res, next) => {
  next(createError(ErrorCodeNames.NOT_FOUND))
});

// error handler
app.use(exceptionMiddleware)

const port = process.env.PORT || '3030';
app.set('port', port);


const start = async () => {
  try {
    await sequelize.authenticate();
    logger.info('Connection has been established successfully.');
    const server = http.createServer(app);
    server.listen(port).on('listening', () => {
      logger.info(`Server running on port ${port}`);
    })
  } catch (error) {
    logger.error('Unable to connect to the database:', error);
  }
}
start();