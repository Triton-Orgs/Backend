import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';
import { errorHandler } from './middlewares/errorHandler';
import limiter from './utils/rateLimit';
import routes from './routes';
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from './utils/swagger';

const app = express();

app.use(express.json());
app.use(morgan('combined'));
app.use(helmet());
app.use(cors());
app.use(limiter);

app.use('/api', routes);

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(errorHandler);

export default app;