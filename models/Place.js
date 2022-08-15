import mongoose from 'mongoose';
const { Schema } = mongoose;

const placeSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	type: {
		type: String,
		required: true,
	},
	city: {
		type: String,
		required: true,
	},
	address: {
		type: String,
		required: true,
	},
	photos: {
		type: [String],
	},
	title: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	rating: {
		type: Number,
		min: 0,
		max: 5,
	},
	cheapestPrice: {
		type: Number,
		required: true,
	},
	feature: {
		type: Boolean,
		required: false,
	},
});

export default mongoose.model('Place', placeSchema);
