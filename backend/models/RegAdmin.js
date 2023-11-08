import mongoose from "mongoose";

const adminSchema = new mongoose.Schema(
  {  name:{
     type:String,
     required: false,
          },
    username: {
      type: String,
      required: false,
    },
    email: {
      type: String,
      required: false,
    },
    password: {
      type: String,
      required: false,
    },
    ph_number:{
      type:Number,
      required: false
    },

    role: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("AdminReg", adminSchema);