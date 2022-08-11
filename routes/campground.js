const express = require("express");
const campgrounds = require("../models/campgrounds");
const Campground = require("../models/campgrounds");

router = express.Router();

router.get("/", async(req, res) => {
  const campgrounds = await Campground.find({});  
  console.log(campgrounds)
  res.render("campgrounds/index", {campgrounds});
});

router.get("/new", (req, res) => {
  res.render("campgrounds/new");
});

router.post("/", async (req, res) => {
  const campground = new Campground(req.body.campground);
  // await campground.save();
  console.log(campground);
  res.redirect("/campgrounds");
});

module.exports = router;
