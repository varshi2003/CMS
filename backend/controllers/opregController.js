import OperatorReg from '../models/Opreg.js'

//create new Users
export const createOperatorReg = async (req, res) => {
          const newOperatorReg = new OperatorReg(req.body)
          try {
                    const savedOperatorReg = await newOperatorReg.save()
                    res.status(200).json({
                              success: true,
                              message: "Sucessfully created",
                              data: savedOperatorReg
                    });
          }
          catch (err) {
                    res.status(500).json({ success: false, message: "Failed to create.Try again" })
          }
};

//update Users
export const updateOperatorReg = async (req, res) => {

          const id = req.params.id;

          try {
                    const updatedOperatorRegs = await Users.findByIdAndUpdate(id, {
                              $set: req.body
                    }, { new: true });

                    res.status(200).json({
                              success: true,
                              message: "Sucessfully updated",

                    });

          } catch (err) {

                    res.status(500).json({
                              success: false,
                              message: "failed to update",

                    });

          }
};

// get all Operator
export const getAlloperator = async (req, res) => {
          try {

                    const getalloperator = await OperatorReg.find({})



                    res.status(200).json({
                              success: true,
                              message: "Sucessfull",
                              data: getalloperator,
                    });

          } catch (err) {

                    res.status(404).json({
                              success: false,
                              message: "not found",


                    });
                    console.log(err);
          }
};