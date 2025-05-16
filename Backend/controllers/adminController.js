import RegistrationModel from "../models/registrationModel.js";


const getAllUsers = async (req, res) => {
  try {
    const users = await RegistrationModel.find({ role: "user" }).select(
      "-password" // password nahi bhejna chahiye response mein
    );
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch users", error: error.message });
  }
};


const deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const deletedUser = await RegistrationModel.findByIdAndDelete(userId);
    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete user", error: error.message });
  }
};


const updateUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const { name, email, phone } = req.body;

    // Validation: email unique check
    const userWithEmail = await RegistrationModel.findOne({ email, _id: { $ne: userId } });
    if (userWithEmail) {
      return res.status(400).json({ message: "Email already in use by another user" });
    }

    const updatedUser = await RegistrationModel.findByIdAndUpdate(
      userId,
      {
        fullName: name,
        email,
        mobileNumber: phone,
      },
      { new: true }
    ).select("-password");

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: "Failed to update user", error: error.message });
  }
};

export { getAllUsers, deleteUser, updateUser };
