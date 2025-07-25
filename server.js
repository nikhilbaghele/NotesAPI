import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

import authRoutes from './routes/auth.js'
import noteRoutes from './routes/notes.js'

dotenv.config();

const app = express();
app.use(express.json());

//Routes 
app.use('/api/auth', authRoutes)
app.use('/api/notes', noteRoutes)


//DB Connection
mongoose.connect(process.env.MONGODB_URI)
.then(() => {
    app.listen(process.env.PORT, () =>
        console.log(`Server running on http://localhost:${process.env.PORT}`)
    );
})
.catch(err => console.error('MongoDB connection error: ', err))