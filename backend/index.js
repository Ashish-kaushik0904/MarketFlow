require("dotenv").config();

const dns = require("dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]);

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const { HoldingModels } = require("./model/HoldingModels");
const { PositionsModel } = require("./model/PositionsModel");
const { UserModel } = require("./model/UserModel");
const { verifyToken } = require("./middleware/auth");

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

const app = express();

app.use(cors());
app.use(bodyParser.json());

// ─── AUTH ROUTES ────────────────────────────────────────────

// SIGNUP
app.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Check if user already exists
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Save new user
    const newUser = new UserModel({
      name,
      email,
      password: hashedPassword,
    });
    await newUser.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

// LOGIN
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find user by email
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // Create JWT token
    const token = jwt.sign(
      { id: user._id, name: user.name, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.json({
      message: "Login successful",
      token,
      user: { name: user.name, email: user.email },
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

// ─── PROTECTED ROUTES ───────────────────────────────────────

app.get("/allHoldings", verifyToken, async (req, res) => {
  let allHoldings = await HoldingModels.find({});
  res.json(allHoldings);
});

app.get("/allPositions", verifyToken, async (req, res) => {
  let allPositions = await PositionsModel.find({});
  res.json(allPositions);
});

// ─── START SERVER ────────────────────────────────────────────

app.listen(PORT, () => {
  console.log("App Started on port " + PORT);
  mongoose.connect(uri).then(() => console.log("MongoDB connected"));
});