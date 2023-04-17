import express from 'express';
import bodyparser from 'body-parser';
import * as routes from './src/index.js';
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';
import cors from 'cors';
import path from 'path';

const app = express();

const corsOptions = {
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204
};

app.use(cors(corsOptions));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

/**
 * swagger docs
 */
app.use(
    '/docs',
    swaggerUi.serve,
    swaggerUi.setup(YAML.load(path.resolve() + '/api-docs.yml'))
);


/**
 * adding routes
 */
Object.values(routes)
    .map(route => app.use('/api', route));


export default app;
