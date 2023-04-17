import * as dotenv from 'dotenv';
const process = dotenv.config();

const config = {
    PORT : process.parsed.PORT,
    // DB_CONFIG: process.parsed.DB_CONFIG,
    JWT_SECRETE_KEY: process.parsed.JWT_SECRETE_KEY,
};

export default config;
