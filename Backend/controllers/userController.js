import RegistrationModel from "../models/registrationModel.js";


// Get user profile by user id from token (middleware se id milega)
exports.getProfile = async (req, res) => {
  try {
    const userId = req.user.id; // assume JWT middleware sets req.user
    const user = await User.findById(userId).select("-__v -createdAt -updatedAt");
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// Update user profile
exports.updateProfile = async (req, res) => {
  try {
    const userId = req.user.id;
    const { name, email, phone, address, photo } = req.body;

    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: "User not found" });

    // Update fields
    user.name = name || user.name;
    user.email = email || user.email;
    user.phone = phone || user.phone;
    user.address = address || user.address;
    user.photo = photo || user.photo;

    await user.save();

    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
