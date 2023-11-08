import mongoose from "mongoose";

const roleentrySchema = new mongoose.Schema(
  {
    
          fname:{
          type: String,
          required: false,
       },
       _fm_id:{
         type: String,
         required: true,
         unique:true
     
      },
       fm_address:{
          type: String,
          required: false,
       },

       username: {
          type: String,
          required: false,
          // unique: true,
        },
        // email: {
        //   type: String,
        //   required: false,
        //   // unique: true,
        // },
        // password: {
        //   type: String,
        //   required: false,
        // },
       
        ph_number:{
          type: Number,
          required: false,
  
       },
       role:{
          type: String,
          required: false,

       },
       
},
{ timestamps: true }
);
    
    

//     reviews: [
//       {
//         type: mongoose.Types.ObjectId,
//         ref: "Review",
//       },
//     ],

 

export default mongoose.model("RoleEntry", roleentrySchema);
