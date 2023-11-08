import DataEntry from "../models/DataEntry.js"

//create new Dataentry
export const createDataEntry = async (req, res) => {
  const newDataEntry = new DataEntry(req.body)
  try {
    const savedDataEntry = await newDataEntry.save()
    res.status(200).json({
      success: true,
      message: "Sucessfully created",
      data: savedDataEntry
    });
  }
  catch (err) {
    console.log(err.message);
    res.status(500).json({ success: false, message: "Failed to create.Try again" })
  }
};

// get all datas
export const getAllTransaction = async (req, res) => {
  try {

    const transactions = await DataEntry.find({})



    res.status(200).json({
      success: true,
      message: "Sucessfull",
      data: transactions,
    });

  } catch (err) {

    res.status(404).json({
      success: false,
      message: "not found",


    });
    console.log(err);
  }
};

//get fname



//get fname details by search 
export const getfnameSearch = async (req, res) => {

  const query = {};
  // here 'i' means case insensitive
  if (req.query.fname) {
    query.fname = new RegExp(req.query.fname, 'i');
  }
  if (req.query._fm_id) {
    query._fm_id = new RegExp(req.query._fm_id, 'i');
  }
  if (req.query.location) {
    query.location = new RegExp(req.query.location, 'i');
  }

  try {
    //gte means greater than equal
    const entrydata = await DataEntry.find(query);
    res.status(200).json({
      success: true,
      message: "Sucessfull",
      data: entrydata,
    });
  }
  catch (err) {
    res.status(404).json({
      success: false,
      message: "not found",
    });
  }
};

export const getFishLocWise = async (req, res) => {
  try {
    const pipeline = [
      {
        $group: {
          _id: {
            location: "$location",
            date: {
              $dateToString: {

                format: "%d/%m/%Y",
                date: "$createdAt",
              },
            },
          },
          total_jelabi: { $sum: "$jelabi.JELABI_KILOGM" },
          total_katla: { $sum: "$katla.KATLA_KILOGM" },
          total_rogu: { $sum: "$rogu.ROGU_KILOGM" },
          total_mathi: { $sum: "$mathi.MATHI_KILOGM" },
        },
      },
      {
        $sort: {
          date: 1,
        },
      },
    ];
    const results = await DataEntry.aggregate(pipeline);
    res.status(200).json({
      success: true,
      message: "Sucessfull",
      data: results,

    });

  }
  catch (err) {
    res.status(404).json({
      success: false,
      message: "not found",
    });
  }
}

export const getFishTotal = async (req, res) => {
  try {
    const pipeline = [
      {
        $group: {
          _id: {
            date: {
              $dateToString: {

                format: "%d/%m/%Y",
                date: "$createdAt",
              },
            },
          },
          total_jelabi: { $sum: "$jelabi.JELABI_KILOGM" },
          total_katla: { $sum: "$katla.KATLA_KILOGM" },
          total_rogu: { $sum: "$rogu.ROGU_KILOGM" },
          total_mathi: { $sum: "$mathi.MATHI_KILOGM" },
        },
      },
      {
        $sort: {
          date: 1,
        },
      },
    ];
    const results = await DataEntry.aggregate(pipeline);
    res.status(200).json({
      success: true,
      message: "Sucessfull",
      data: results,

    });

  }
  catch (err) {
    res.status(404).json({
      success: false,
      message: "not found",
    });
  }
}