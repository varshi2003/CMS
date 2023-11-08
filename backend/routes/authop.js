import express from 'express';
import {  op_register,op_login } from '../controllers/authOpreg.js';

const router = express.Router();

router.post('/op_register',op_register)
router.post('/op_login',op_login)
export default router;