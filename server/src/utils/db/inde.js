import mongoose from 'mongoose'
import logger from '../logger'

export const connectDB=async() =>{
    try{
        await mongoose.connect(process.env.DB_URI)
        logger.warn('Connected to the Database')

    } catch(error){
        logger.error(error);
    }

}