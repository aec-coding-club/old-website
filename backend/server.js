const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const path = require("path");
const port = process.env.PORT || 5000;
//
dotenv.config();
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
mongoose.connect(process.env.MONGO_URL, () =>
	console.log("Cloud DB Connected")
);
//
const indexRoutes = require("./routes/index");
app.use("/api", indexRoutes);
//
if (process.env.PRODUCTION === "true") {
	app.use(express.static(path.join(__dirname, "../frontend/build")));
	app.get("/*", (req, res) => {
		res.sendFile(path.join(__dirname, "../frontend/build"));
	});
}
//
app.listen(port, () => console.log("Server started at 5000"));
