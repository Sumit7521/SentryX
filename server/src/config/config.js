import { config } from 'dotenv'


config();


const _config = {
    MONGO_URI: process.env.MONGO_URI,
//     JWT_SECRET: process.env.JWT_SECRET,
//     GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
//     GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
}

export default Object.freeze(_config);