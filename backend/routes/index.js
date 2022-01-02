const express = require("express");
const router = express.Router();
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
//
router.get("/", (req, res) => {
	res.json("wassup bish");
});
//
module.exports = router;
