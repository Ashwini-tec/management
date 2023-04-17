import app from '../server.js';
import http from 'http';
import config from '../lib/config.js';
import '../lib/dbConfig.js';
import * as dotenv from 'dotenv';
import User from '../src/user/userDb.js';
const process = dotenv.config();
import bcrypt from 'bcrypt';

/**
 * Normalize a port into a number, string, or false.
 */
const normalizePort =(val) =>{
    const port = parseInt(val, 10);

    if (isNaN(port)) {
    // named pipe
        return val;
    }

    if (port >= 0) {
    // port number
        return port;
    }

    return false;
};

/**
 * Event listener for HTTP server 'error' event.
 */

const onError = (error) => {
    if (error.syscall !== 'listen') {
        throw error;
    }

    const bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;

    // handle specific listen errors with friendly messages
    switch (error.code) {
    case 'EACCES':
        console.error(bind + ' requires elevated privileges');
        break;
    case 'EADDRINUSE':
        console.error(bind + ' is already in use');
        break;
    default:
        throw error;
    }
};

/**
 * Event listener for HTTP server 'listening' event.
 */

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

/**
 * Get port from environment and store in Express.
 */

const port = normalizePort(config.PORT);
app.set('port', port);

/**
 * Create HTTP server.
 */

const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.on('error', onError);
server.on('listening',onListening);

server.listen(port,  ()=>{ console.log(`Express Server Listening On : ${port}`);});


export default server;
