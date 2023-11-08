import OperatorReg from '../models/Opreg.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

//user registration
export const op_register = async (req, res) => {
  try {

    //hashing password

    const salt = bcrypt.genSaltSync(10)
    const hash = bcrypt.hashSync(req.body.password, salt)

    const newOperatorReg = new OperatorReg({
      name: req.body.name,
      username: req.body.username,
      email: req.body.email,
      password: hash,
      op_id: req.body.op_id,
      ph_number: req.body.ph_number,
      fishery_location: req.body.fishery_location,
      role: req.body.role
    })

    const savedOperatorReg = await newOperatorReg.save()
    res.status(200).json({
      success: true, message: 'Successfully created',
      data: savedOperatorReg
    })

  } catch (err) {

    res.status(500).json({ success: false, message: 'Failed to create . Try again' })
    console.log(err);

  }
}

//user login
export const op_login = async (req, res) => {

  const email = req.body.email

  try {

    const user = await OperatorReg.findOne({ email })
    //if user doesn't exist
    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' })
    }

    //if user is exist then check the password or compare the password
    const checkCorrectPassword = await bcrypt.compare(req.body.password, user.password)

    //if password is incorrect 
    if (!checkCorrectPassword) {
      return res.status(401).json({ success: false, message: 'Incorrect email or password' })
    }

    const { password, role, ...rest } = user._doc

    //create jwt token
    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "15d" }
    );

    //set token in the browser cookies and send the response to the client 
    res.cookie('accessToken', token, {
      httpOnly: true,
      expires: token.expiresIn
    }).status(200).json({
      token,
      success: true,
      message: 'Sucessfully login', data: { ...rest },
      role,
    })

  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, message: 'Failed to login' });

  }
};