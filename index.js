import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import authRoute from './routes/auth.js';
import placeRoute from './routes/places.js';
import userRoute from './routes/users.js';

dotenv.config();
const app = express();
const port = 8800;

const connect = async () => {
	try {
		await mongoose.connect(process.env.MONGO);
		console.log('Connected to mongoDB');
	} catch (error) {
		throw error;
	}
};

//middlewares

app.use(express.json());

app.use('/api/auth', authRoute);
app.use('/api/places', placeRoute);
app.use('/api/users', userRoute);

app.listen(port, () => {
	connect();
	console.log(`Connected to backend and listening on port ${port}`);
});

export default app;
