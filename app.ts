import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

import { connectDB } from './src/config';
import { authRoutes } from './src/routes';

dotenv.config();

const app = express();

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Connect to MongoDB
connectDB();

// Routes
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
