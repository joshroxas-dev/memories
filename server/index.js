import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import postRoutes from "./routes/posts.js";

const app = express();

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/posts", postRoutes);

const CONNECTION_URL =
	"mongodb+srv://joshuser:joshuser123@cluster0.50nzv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose
	.connect(CONNECTION_URL, {
		useNewUrlParser: true,
		newUnifiedTopology: true,
	})
	.then(() => app.listen(PORT, () => console.log(`server running on port ${PORT}`)))
	.catch((err) => console.log(err));

mongoose.set("useFindAndModify", false);
