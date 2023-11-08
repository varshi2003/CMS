import RoleEntry from "../models/RoleEntry.js"

//create new Dataentry
export const createRoleEntry = async (req, res) => {
  const newRoleEntry = new RoleEntry(req.body)
  try {
    const savedRoleEntry = await newRoleEntry.save()
    res.status(200).json({
      success: true,
      message: "Sucessfully created",
      data: savedRoleEntry
    });
  }
  catch (err) {

    res.status(500).json({ success: false, message: "Failed to create.Try again" })
    console.log(err);
  }
};

export const getfid = async (req, res) => {


  try {
    const user = await RoleEntry.findOne({}, 'fname ,_fm_id');
    res.json(user)

  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

// get all Fisherman
export const getAllfisherman = async (req, res) => {
  try {

    const getallfisherman = await RoleEntry.find({})



    res.status(200).json({
      success: true,
      message: "Sucessfull",
      data: getallfisherman,
    });

  } catch (err) {

    res.status(404).json({
      success: false,
      message: "not found",


    });
    console.log(err);
  }
};
