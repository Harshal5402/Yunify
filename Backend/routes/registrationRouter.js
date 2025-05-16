import express from 'express';
import { registerUserDetails, loginUser, getProfile, updateProfile } from '../controllers/registrationController.js';
import authMiddleware from "../middleware/auth.js";

const registrationRouter = express.Router();

registrationRouter.post('/register', registerUserDetails);
registrationRouter.post('/login', loginUser);

registrationRouter.get("/profile", authMiddleware, getProfile);
registrationRouter.put("/profile", authMiddleware, updateProfile);
export default registrationRouter;
