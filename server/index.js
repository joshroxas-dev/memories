import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import postRoutes from "./routes/posts.js";

const app = express();

dotenv.config();

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/posts", postRoutes);

app.get("/", (req, res) => {
	res.send("Hello to moide api");
});

const PORT = process.env.PORT || 5000;

mongoose
	.connect(process.env.CONNECTION_URL, {
		useNewUrlParser: true,
		newUnifiedTopology: true,
	})
	.then(() => app.listen(PORT, () => console.log(`server running on port ${PORT}`)))
	.catch((err) => console.log(err));

mongoose.set("useFindAndModify", false);
