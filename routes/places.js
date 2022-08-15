import express from 'express';
import Place from '../models/Place.js';

const router = express.Router();

//CREATE
router.post('/', async (req, res) => {
	const newPlace = new Place(req.body);

	try {
		const savedPlace = await newPlace.save();
		res.send(200).json(savedPlace);
	} catch (err) {
		res.status(500).json(err);
	}
});

//UPDATE
router.put('/:id', async (req, res) => {
	try {
		const updatePlace = await Place.findByIdAndUpdate(
			req.params.id,
			{ $set: req.body },
			{ new: true }
		);
		res.send(200).json(updatePlace);
	} catch (err) {
		res.status(500).json(err);
	}
});

//DELETE
router.put('/:id', async (req, res) => {
	try {
		await Place.findByIdAndDelete(req.params.id);
		res.send(200).json('Place has been deleted');
	} catch (err) {
		res.status(500).json(err);
	}
});

//GET
router.put('/:id', async (req, res) => {
	try {
		const place = await Place.findById(req.params.id);
		res.send(200).json(place);
	} catch (err) {
		res.status(500).json(err);
	}
});

//GET All
router.put('/', async (req, res) => {
	try {
		const places = await Place.find();
		res.send(200).json(places);
	} catch (err) {
		res.status(500).json(err);
	}
});

export default router;
