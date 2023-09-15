import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { morganMiddleware } from './utils/logger';
import logger from './utils/logger';
import { connectDB } from './utils/db/inde';

dotenv.config(path.join(path.resolve(), '.env'));
const app = express();

connectDB();

app.use(morganMiddleware)
app.get('/', (req, res) => {
    try {
        res.send('hi')
        throw new Error("BROKEN");
    } catch (error) {
        logger.error(error);
    }


});

app.listen(process.env.PORT || 8080, () => {
    console.log(`Server is running on port ${process.env.PORT || 8080}`);
    logger.info('Server is running on port ${ process.env.PORT ||8080}');
});