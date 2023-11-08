import mongoose from "mongoose";

const OpregSchema = new mongoose.Schema(
  {

    name: {
      type: String,
      required: false,
    },
    username: {
      type: String,
      required: false,
      // unique: true,
    },
    email: {
      type: String,
      required: false,
      // unique: true,
    },
    password: {
      type: String,
      required: false,
    },

    op_id: {
      type: String,
      required: true,
      unique: true

    },
    op_address: {
      type: String,
      required: false,

    },
    ph_number: {
      type: Number,
      required: false,

    },
    fishery_location: {
      type: String,
      required: false,
    },
    role: {
      type: String,
      required: false
    }

  },
  { timestamps: true }
);
// OpregSchema.pre("save", async function (next) {
//   this.createdAt = new Date();
//   next();
// });

export default mongoose.model("OperatorReg", OpregSchema);
