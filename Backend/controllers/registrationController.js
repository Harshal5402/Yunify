import RegistrationModel from "../models/registrationModel.js";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const registerUserDetails = async (req, res) => {
  const {
    fullName,
    mobileNumber,
    email,
    password,
    registrationNo,
    location,
    role,
    skills,
  } = req.body;

  try {
    if (
      !fullName ||
      !mobileNumber ||
      !email ||
      !password ||
      !registrationNo ||
      !location ||
      !role
    ) {
      return res.status(400).json({
        success: false,
        message: "Please fill all required fields",
      });
    }

    if (!validator.isEmail(email)) {
      return res.json({
        success: false,
        message: "Please enter a valid email",
      });
    }

    if (password.length < 6) {
      return res.json({
        success: false,
        message: "Please  enter a strong password",
      });
    }

    const exists = await RegistrationModel.findOne({ email });
    if (exists) {
      return res.status(400).json({
        success: false,
        message: "Email already registered",
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newRegistration = new RegistrationModel({
      fullName,
      mobileNumber,
      email,
      password: hashedPassword,
      registrationNo,
      location,
      role:
        role?.toLowerCase() === "admin" || role?.toLowerCase() === "user"
          ? role.toLowerCase()
          : "user",
      skills: Array.isArray(skills) ? skills : skills ? [skills] : [],
    });

    const user = await newRegistration.save();
    const token = createToken(user._id);
    res.status(201).json({
      success: true,
      message: "Registration successful",
      token,
      role: user.role,
    });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: "Error",
    });
  }
};

const createToken = (userId) => {
  return jwt.sign({ userId }, process.env.JWT_SECRET);
};

const loginUser = async (req, res) => {
  const { email, password, role } = req.body;

  try {
    if (!email || !password || !role) {
      return res.status(400).json({
        success: false,
        message: "Email and password are required",
      });
    }

    const user = await RegistrationModel.findOne({ email });

    if (!user) {
      return res.json({
        success: false,
        message: "User Does'nt exist",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.json({
        success: false,
        message: "Invalid credentials",
      });
    }

    if (user.role?.toLowerCase() !== role?.toLowerCase()) {
      return res.status(401).json({
        success: false,
        message: "Access Denied: Role mismatch",
      });
    }

    const token = createToken(user._id);
    res.json({
      success: true,
      token,
      role: user.role,
    });
  } catch (error) {
    console.error("Login Error:", error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};







const getProfile = async (req, res) => {
  try {
    console.log("getProfile called for userId:", req.userId);
    const user = await RegistrationModel.findById(req.userId).select("-password -__v");
    if (!user) {
      console.log("User not found for id:", req.userId);
      return res.status(404).json({ message: "User not found" });
    }
    console.log("User found:", user);
    res.json(user);
  } catch (err) {
    console.error("Server error in getProfile:", err);
    res.status(500).json({ message: "Server error" });
  }
};

const updateProfile = async (req, res) => {
  try {
    const userId = req.userId;
    console.log("updateProfile called for userId:", userId);
    console.log("Update data received:", req.body);

    const updatedUser = await RegistrationModel.findByIdAndUpdate(
      userId,
      {
        $set: {
          fullName: req.body.fullName,
          profileImage: req.body.profileImage,
          mobileNumber: req.body.mobileNumber,
          email: req.body.email,
          registrationNo: req.body.registrationNo,
          location: req.body.location,
          skills: req.body.skills,
        },
      },
      { new: true, runValidators: true, context: "query" }
    ).select("-password -__v");

    if (!updatedUser) {
      console.log("User not found for update, id:", userId);
      return res.status(404).json({ message: "User not found" });
    }

    console.log("User updated successfully:", updatedUser);
    res.json(updatedUser);
  } catch (error) {
    console.error("Server error in updateProfile:", error);
    res.status(500).json({ message: "Server error" });
  }
};



export { registerUserDetails, loginUser, getProfile, updateProfile };
