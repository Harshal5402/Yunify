import mongoose from "mongoose";

const registrationSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true },
    mobileNumber: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    registrationNo: { type: String, required: true },
    location: { type: String, required: true },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
      required: true,
    },
    skills: [{ type: String }],
  },
  { timestamps: true }
);

const RegistrationModel =
  mongoose.models.registration ||
  mongoose.model("registration", registrationSchema);

export default RegistrationModel;
