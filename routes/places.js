import express from 'express';
import {
	createPlace,
	deletePlace,
	getAllPlace,
	getPlace,
	updatePlace,
} from '../controller/place.js';
import Place from '../models/Place.js';
import { verifyAdmin } from '../utils/verifyToken.js';

const router = express.Router();

//CREATE
router.post('/', verifyAdmin, createPlace);

//UPDATE
router.put('/:id', verifyAdmin, updatePlace);

//DELETE
router.put('/:id', verifyAdmin, deletePlace);

//GET
router.put('/:id', getPlace);

//GET All
router.put('/', getAllPlace);

export default router;
