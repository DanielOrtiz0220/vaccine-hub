const express = require("express");
const User = require("../models/user");
const router = express.Router();

router.post("/login", async (req, res, next) => {
  try {
  } catch (e) {
    next(e);
  }
});

router.post("/register", async (req, res, next) => {
  try {
  } catch (e) {
    next(e);
  }
});

module.exports = router;
