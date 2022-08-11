const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const ejsMate = require('ejs-mate')
const methodOvereide = require('method-override')
const campgroundsRoutes = require('./routes/campground')

mongoose.connect("mongodb://localhost:27017/yelp-camp-practice", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", () => {
  console.log("Database connected");
});


app = express()
app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOvereide("_method"));

app.use('/campgrounds', campgroundsRoutes);

app.listen(5000, () => {
    console.log('Listening at port 5000')
})