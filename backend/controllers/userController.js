import Users from '../models/User.js'

//create new Users
export const createUsers = async(req,res)=>{
          const newUsers = new Users(req.body)
          try{
                    const savedUsers = await newUsers.save()
                    res.status(200).json({
                              success:true,
                              message:"Sucessfully created",
                              data:savedUsers});
          }
          catch(err){
                    res.status(500).json({success:false,message:"Failed to create.Try again"})
          }
};


//update Users
export const updateUser = async(req , res) =>{

          const id = req.params.id;

          try{
          const updatedUsers = await Users.findByIdAndUpdate(id,{
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



//delete Users
export const deleteUser = async(req , res) =>{
          const id = req.params.id;

          try{
           await Users.findByIdAndDelete(id);
                      
          res.status(200).json({
                    success:true,
                    message:"Sucessfully deleted",
                  
          });

          }catch(err){
                    
                    res.status(500).json({
                              success:false,
                              message:"failed to delete",
                             
                    });

          }
};

//getSingle Users
export const getSingleUser = async(req , res) =>{
  const id = req.params.id;

  try{
    const user = await Users.findById(id);
              
  res.status(200).json({
            success:true,
            message:"Sucessfull",
            data:user,
          
  });

  }catch(err){
            
            res.status(404).json({
                      success:false,
                      message:"not found",
                     
            });

  }
};

//getAll Users
export const getAllUser = async(req , res) =>{
      
          
          try{

            const users = await Users.find({})
            res.status(200).json({ success:true,
            
              message:"Sucessfull",
              data:users,

            });

          }catch(err){
            res.status(404).json({
              success:false,
              message:"not found",
             
    });
          }
};
