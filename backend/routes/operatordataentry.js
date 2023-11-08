import express from 'express';
import { createDataEntry, getAllTransaction, getfnameSearch, getFishLocWise, getFishTotal } from "../controllers/operatordataentryController.js"
const router = express.Router();

//create new DataEntry
router.post('/', createDataEntry);
router.get('/', getAllTransaction);
router.get("/search", getfnameSearch)
router.get("/locWiseFise", getFishLocWise)
router.get("/locWiseTotal", getFishTotal)
export default router;
