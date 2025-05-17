import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import "dotenv/config";
import registrationRouter from './routes/registrationRouter.js';
import adminRouter from "./routes/adminRouter.js";

const app = express();
const port = 4000;

app.use(express.json());
app.use(cors({
 origin: process.env.USER_WEBSITE, 
  credentials: true
}
));

connectDB();

app.use('/api/registration', registrationRouter);
app.use("/api/admin", adminRouter);

app.get("/", (req, res) => {
  res.send("API Working");
});

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
