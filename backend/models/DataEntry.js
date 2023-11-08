import mongoose from "mongoose";

const dataentrySchema = new mongoose.Schema(
  {

    fname: String,
    _fm_id: { type: String, require: true },
    location: String,
    jelabi: {
      JELABI_KILOGM: Number,
      val1: Number,
    },
    katla: {
      KATLA_KILOGM: Number,
      val2: Number,
    },
    rogu: {
      ROGU_KILOGM: Number,
      val3: Number,
    },
    mathi: {
      MATHI_KILOGM: Number,
      val4: Number,
    },
    total_wages: Number,
  },
  { timestamps: true }
);

// Create a pre-save middleware to set the createdAt field

//     reviews: [
//       {
//         type: mongoose.Types.ObjectId,
//         ref: "Review",
//       },
//     ],



export default mongoose.model("DataEntry", dataentrySchema);
