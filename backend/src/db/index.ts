import mongoose from 'mongoose'
import { MONGO_URI } from '../config'

export const connectDB = async () => {
    try {
        mongoose.set('strictQuery', false)
        await mongoose.connect(MONGO_URI)    
        console.log('MongoDB connected')
    } catch (error) {
        console.error('MongoDB connection error:', error)
        process.exit(1)
    }
};
