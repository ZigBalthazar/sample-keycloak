import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';
import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
//
import { NODE_ENV, PORT, ORIGIN, CREDENTIALS } from './config';
import errorMiddleware from './middlewares/error';

import user from './routes/userRouter';
import login from './routes/loginRouter';
import check from './routes/checkRouter'

class App {
  public app: express.Application;
  public env: string;
  public port: string | number;

  constructor() {
    this.app = express();
    this.env = NODE_ENV;
    this.port = PORT || 3000;

    this.initializeMiddlewares();
    this.initializeSwagger();
    this.initializeRoutes();
    this.app.use(errorMiddleware);
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.log(`\n\nServer running in ${process.env.NODE_ENV} mode on port ${PORT} \n\n`);
      console.log("")
    });
  }

  public getServer() {
    return this.app;
  }

  private initializeMiddlewares() {
    this.app.use(cors({ origin: ORIGIN, credentials: CREDENTIALS }));
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(cookieParser());
  }

  private initializeRoutes() {
    this.app.get('/ping', (req, res) => {
      res.end('pong');
    });

    this.app.use('/user', user);
    this.app.use('/login', login);
    this.app.use('/check', check);
  }

  private initializeSwagger() {
    console.log('cwd', process.cwd());

    const swaggerDefinition = {
      openapi: '3.0.0',
      info: {
        title: 'API docs',
        version: '1.1.0',
        description: '',
      },
    };

    const swaggerOptions = {
      swaggerDefinition,
      apis: ['./src/*/*'],
    };

    this.app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerJsDoc(swaggerOptions), { explorer: true }));
  }
}

export default App;
