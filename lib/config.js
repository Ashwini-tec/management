import * as dotenv from 'dotenv';
const process = dotenv.config();

const config = {
    PORT : process.parsed.PORT,
    // DB_CONFIG: process.parsed.DB_CONFIG,
    JWT_SECRETE_KEY: process.parsed.JWT_SECRETE_KEY,
    AWS:{
        accessKeyId:'AKIAYHKCPWVUCOYJEBO4',
        secretAccessKey:'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',
        folderName:'thumbnail/',
        BucketName:'eaclub',
        endpoint: 's3.ap-south-1.amazonaws.com',
        region:'ap-south-1',
    }
};

export default config;
