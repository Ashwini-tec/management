import mongoose from 'mongoose';
import config from './config.js';

mongoose.connect(config.DB_CONFIG || 'mongodb://0.0.0.0:27017/management',
    { useNewUrlParser: true, useUnifiedTopology: true }
)
    .then(console.log('/ DataBase connected ..' ))
    .catch(err => console.log('/ Error : ',err.message ));

export default mongoose;
