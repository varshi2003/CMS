import express from 'express';
import { updateOperatorReg, getAlloperator } from "../controllers/opregController.js"
const router = express.Router();

//create new DataEntry
router.post('/id', updateOperatorReg);
router.get('/', getAlloperator);
export default router;