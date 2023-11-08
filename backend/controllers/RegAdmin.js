import RegAdmin from "../models/RegAdmin.js";

//create new Users
export const createRegAdmin = async(req,res)=>{
          const newRegAdmin = new RegAdmin(req.body)
          try{
                    const savedRegAdmin = await newRegAdmin.save()
                    res.status(200).json({
                              success:true,
                              message:"Sucessfully created",
                              data:savedRegAdmin});
          }
          catch(err){
                    res.status(500).json({success:false,message:"Failed to create.Try again"})
          }
};

//update Users
export const updateRegAdmin  = async(req , res) =>{

          const id = req.params.id;

          try{
          const updatedRegAdmin = await Users.findByIdAndUpdate(id,{
                    $set:req.body
          },{new:true});
                      
          res.status(200).json({
                    success:true,
                    message:"Sucessfully updated",
          
          });

          }catch(err){
                    
                    res.status(500).json({
                              success:false,
                              message:"failed to update",
                             
                    });

          }
};
