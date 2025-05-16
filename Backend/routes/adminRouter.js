import express from "express";
import { getAllUsers, deleteUser, updateUser } from "../controllers/adminController.js";

const adminRouter = express.Router();


adminRouter.get("/users", getAllUsers);

adminRouter.delete("/users/:id", deleteUser);

adminRouter.put("/users/:id", updateUser);

export default adminRouter;
