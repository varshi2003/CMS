import express from 'express';
import {createRegAdmin,updateRegAdmin} from "../controllers/RegAdmin.js";
const router = express.Router();

//create new DataEntry
router.post('/',createRegAdmin);
router.post('/id',updateRegAdmin);
export default router;