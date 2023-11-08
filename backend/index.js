import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dataentryRoute from "./routes/operatordataentry.js";
import adminroleentryRoute from "./routes/AdminRoleEntry.js";
import userRoute from './routes/user.js';
import authRoute from './routes/auth.js';
import opregRoute from './routes/Opreg.js';
import authopregRoute from './routes/authop.js';
import adminRoute from './routes/admin.js';
import authadminRoute from './routes/authAdmin.js';
dotenv.config();
const app = express();
const port = process.env.PORT || 8000;
const corsOptions = {
       origin: true,
       credentials: true,
}
//database connection
mongoose.set('strictQuery', false);
const connect = async () => {
       try {
              await mongoose.connect(process.env.MONGO_URI, {
                     useNewUrlParser: true,
                     useUnifiedTopology: true
              });
              console.log('MongoDb database connected');
       } catch (err) {
              console.log(err.message);
              console.log('MongoDb database connection failed');
       }

}
//middleware
app.use(express.json());
app.use(cors(corsOptions));
app.use(cookieParser());
app.use("/api/v1/dataentrys", dataentryRoute)
app.use("/api/v1/role_entry", adminroleentryRoute)
app.use('/api/v1/users', userRoute);
app.use('/api/v1/auth', authRoute);
app.use('/api/v1/opreg', opregRoute);
app.use('/api/v1/authto', authopregRoute);
app.use('/api/v1/regadmin', adminRoute);
app.use('/api/v1/authadmin', authadminRoute);


//for testing 
// app.get("/",(req,res)=>{
//           res.send("api is working");
// });
app.listen(port, () => {
       connect();
       console.log('server listening on port', port);

})