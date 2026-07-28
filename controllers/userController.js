import { verifyMail } from "../emailVerify/verifyMail.js";
import { User } from "../models/userModel.js";
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

export const registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "All Fields are required"
      })
    }

    const existingUser = await User.findOne({ email })

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User alredy exists"
      })
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const newUser = await User.create({
      username,
      email,
      password: hashedPassword
    })

    const token = jwt.sign(
      { id: newUser._id },
      process.env.SECRET_KEY,
      {
        expiresIn: "2m",
      }
    );

    await verifyMail(token, email);

    newUser.token = token;

    await newUser.save();

    return res.status(201).json({
      success: true,
      message: "User registered Successfully",
      data: newUser,
    })



  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message
    })
  }
}