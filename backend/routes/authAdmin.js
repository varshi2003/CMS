import express from 'express';
import {  admin_register,admin_login } from '../controllers/authadmin.js';

const router = express.Router();

router.post('/admin_register',admin_register)
router.post('/admin_login',admin_login)
export default router;