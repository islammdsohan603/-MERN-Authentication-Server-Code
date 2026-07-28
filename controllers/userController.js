import { User } from "../models/userModel"

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

    const newUser = await User.create({
      username,
      email,
      password
    })

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