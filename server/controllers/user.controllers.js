const User = require("../models/users.model");
const argon2 = require("argon2");
const jwt = require("jsonwebtoken");
const validator = require("validator");
const jwt_secret = process.env.JWT_SECRET;

const register = async (req, res) => {
  const { email, password, password2 } = req.body;

  if (!email || !password || !password2) {
    return res.json({ ok: false, message: "All fields required" });
  }
  if (password !== password2) {
    return res.json({ ok: false, message: "Passwords must match" });
  }
  if (!validator.isEmail(email)) {
    return res.json({ ok: false, message: "Invalid email" });
  }

  try {
    const user = await User.findOne({ email });
    if (user) {
      return res.json({ ok: false, message: "User already exists!" });
    }

    const hash = await argon2.hash(password);
    const newUser = {
      email,
      password: hash,
    };
    await User.create(newUser);
    res.json({ ok: true, message: "Successfully registered" });
  } catch (error) {
    console.error(error);
    res.json({ ok: false, error });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.json({ ok: false, message: "All fields are required" });
  }
  if (!validator.isEmail(email)) {
    return res.json({ ok: false, message: "Invalid email provided" });
  }

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({ ok: false, message: "User not found" });
    }

    const match = await argon2.verify(user.password, password);
    if (match) {
      const token = jwt.sign({ userId: user._id, userEmail: user.email }, jwt_secret, {
        expiresIn: "1h",
      });
      res.json({ ok: true, message: "Welcome back", token });
    } else {
      return res.json({ ok: false, message: "Invalid credentials" });
    }
  } catch (error) {
    console.error(error);
    res.json({ ok: false, error });
  }
};

const verify_token = (req, res) => {
  const token = req.headers.authorization;
  jwt.verify(token, jwt_secret, (err, decoded) => {
    if (err) {
      res.json({ ok: false, message: "Token is invalid" });
    } else {
      res.json({ ok: true, decoded });
    }
  });
};

module.exports = { register, login, verify_token };
