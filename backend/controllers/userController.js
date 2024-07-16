

import asyncHandler from "../middlewares/asyncHandler.js";
import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import creatToken from "../utils/createToken.js";

const createUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;

 if( !username || !email || !password) {
  throw new Error("Please  fill all the inputs.");
 }

 const userExist = await User.findOne({email})
 if (userExist) res.status(400).send("User already exist");

 const salt = await bcrypt.genSalt(10);
 const hashPassword = await bcrypt.hash(password, salt);

const newUser = new User ({username, email, password: hashPassword })

  try {
    await newUser.save()
    creatToken(res, newUser._id);

    res.status(201).json({_id: newUser._id, username: newUser.username, email: newUser.email, isAdmin: newUser.isAdmin})
  } catch (error) {
    res.status(400)
    throw new Error("Invalid user name");
  }

  // Add logic to save the user to the database if needed
  res.status(201).json({ message: "User created successfully" });
});

export { createUser };