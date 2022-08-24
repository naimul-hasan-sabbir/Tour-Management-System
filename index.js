import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import authRoute from './routes/auth.js';
import placeRoute from './routes/places.js';
import userRoute from './routes/users.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';

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
app.use(cors());
app.use(cookieParser());
app.use(express.json());

app.use('/api/auth', authRoute);
app.use('/api/places', placeRoute);
app.use('/api/users', userRoute);

//error handling
app.use((err, req, res, next) => {
	const errorStatus = err.status || 500;
	const errorMessage = err.message || 'Something went wrong!';
	return res.status(errorStatus).json({
		success: false,
		status: errorStatus,
		message: errorMessage,
		stack: err.stack,
	});
});

app.listen(port, () => {
	connect();
	console.log(`Connected to backend and listening on port ${port}`);
});

export default app;
