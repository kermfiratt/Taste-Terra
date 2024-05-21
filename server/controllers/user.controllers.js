const User = require("../models/users.model");
const argon2 = require("argon2");
const jwt = require("jsonwebtoken");
const validator = require("validator");
const jwt_secret = process.env.JWT_SECRET;

const register = async (req, res) => {
  const { email, password, password2 } = req.body;

  if (!email || !password || !password2) {
    console.log("Registration failed: All fields required");
    return res.json({ ok: false, message: "All fields required" });
  }
  if (password !== password2) {
    console.log("Registration failed: Passwords must match");
    return res.json({ ok: false, message: "Passwords must match" });
  }
  if (!validator.isEmail(email)) {
    console.log("Registration failed: Invalid email");
    return res.json({ ok: false, message: "Invalid email" });
  }

  try {
    const user = await User.findOne({ email });
    if (user) {
      console.log("Registration failed: User already exists");
      return res.json({ ok: false, message: "User already exists!" });
    }

    const hash = await argon2.hash(password);
    const newUser = {
      email,
      password: hash,
    };
    await User.create(newUser);
    console.log("Registration successful");
    res.json({ ok: true, message: "Successfully registered" });
  } catch (error) {
    console.error("Error during registration:", error);
    res.json({ ok: false, error: error.message });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    console.log("Login failed: All fields are required");
    return res.json({ ok: false, message: "All fields are required" });
  }
  if (!validator.isEmail(email)) {
    console.log("Login failed: Invalid email provided");
    return res.json({ ok: false, message: "Invalid email provided" });
  }

  try {
    const user = await User.findOne({ email });
    if (!user) {
      console.log("Login failed: User not found");
      return res.json({ ok: false, message: "User not found" });
    }

    const match = await argon2.verify(user.password, password);
    if (match) {
      const token = jwt.sign({ userId: user._id, userEmail: user.email }, jwt_secret, {
        expiresIn: "1h",
      });
      console.log("Login successful");
      res.json({ ok: true, message: "Welcome back", token });
    } else {
      console.log("Login failed: Invalid credentials");
      return res.json({ ok: false, message: "Invalid credentials" });
    }
  } catch (error) {
    console.error("Error during login:", error);
    res.json({ ok: false, error: error.message });
  }
};

const verify_token = (req, res) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.json({ ok: false, message: "Token is required" });
  }

  jwt.verify(token, jwt_secret, (err, decoded) => {
    if (err) {
      console.log("Token verification failed:", err);
      res.json({ ok: false, message: "Token is invalid" });
    } else {
      console.log("Token verification successful");
      res.json({ ok: true, decoded });
    }
  });
};

module.exports = { register, login, verify_token };
