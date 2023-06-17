import express from 'express';
import bodyparser from 'body-parser';
import * as routes from './src/index.js';
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';
import cors from 'cors';
import path from 'path';
import config from './lib/config.js';
import './lib/dbConfig.js';
import * as dotenv from 'dotenv';
import User from './src/user/userDb.js';
const process = dotenv.config();
import bcrypt from 'bcrypt';

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

const onListening = async() => {
    const userData =  await await User.findOne({ email: process.parsed.EMAIL }).lean();
    if(!userData){
        const password = bcrypt.hashSync(process.parsed.PASSWORD, 10);
        const data = {
            firstName :'Admin',
            middleName : '',
            lastName :'',
            address: '',
            mobile: '1234567890',
            email : process.parsed.EMAIL,
            password : password,
        };
        await User.create(data);
        console.log('Bootstrapping Data');
    }
};
onListening();
/**
 * adding routes
 */
Object.values(routes)
    .map(route => app.use('/api', route));

const port = config.PORT;
app.listen(port,  ()=>{ console.log(`Express Server Listening On : ${port}`);});

// export default app;
