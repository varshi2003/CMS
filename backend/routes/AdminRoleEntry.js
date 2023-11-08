import express from 'express';
import { createRoleEntry, getAllfisherman } from "../controllers/AdminRoleEntry.js"
const router = express.Router();

import RoleEntry from "../models/RoleEntry.js"
//create new DataEntry
router.post('/', createRoleEntry);
router.get('/', getAllfisherman);

router.get("/fnames", async (req, res) => {
  const fname = await RoleEntry.find();
  res.json(fname);
});

// Create an API endpoint to fetch the _fm_id for a given fname
router.get("/fnames/:fname", async (req, res) => {
  const fname = req.params.fname;
  const _fm_id = await RoleEntry.findOne({ fname });
  res.json({ _fm_id });
});

export default router;
