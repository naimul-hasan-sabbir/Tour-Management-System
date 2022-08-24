import User from '../models/Place.js';

export const updateUser = async (req, res, next) => {
	try {
		const updatePlace = await User.findByIdAndUpdate(
			req.params.id,
			{ $set: req.body },
			{ new: true }
		);
		res.send(200).json(updatePlace);
	} catch (err) {
		next(err);
	}
};

export const deleteUser = async (req, res, next) => {
	try {
		await User.findByIdAndDelete(req.params.id);
		res.send(200).json('Place has been deleted');
	} catch (err) {
		next(err);
	}
};

export const getUser = async (req, res, next) => {
	try {
		const user = await User.findById(req.params.id);
		res.send(200).json(user);
	} catch (err) {
		next(err);
	}
};

export const getAllUser = async (req, res, next) => {
	try {
		const users = await User.find();
		res.send(200).json(users);
	} catch (err) {
		next(err);
	}
};
