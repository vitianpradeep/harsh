const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

// Connect to MongoDB (you need to have MongoDB server running)
mongoose.connect("mongodb://localhost:27017/myapp", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define the user schema and model
const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
});
const User = mongoose.model("User", userSchema);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// Routes
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/home.html");
});

app.get("/login", (req, res) => {
  res.sendFile(__dirname + "/public/login.html");
});

app.get("/signup", (req, res) => {
  res.sendFile(__dirname + "/public/signup.html");
});

// Handle user login
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  // Check if the user exists in the database
  User.findOne({ email: email, password: password }, (err, foundUser) => {
    if (err) {
      console.log(err);
      return res.redirect("/login");
    }

    if (!foundUser) {
      return res.redirect("/login");
    }

    // Set a cookie or session to remember the user is logged in
    res.cookie("user", email);
    res.redirect("/profile");
  });
});

// Handle user signup
app.post("/signup", (req, res) => {
  const { firstName, lastName, email, password, confirmPassword } = req.body;

  // Basic validation
  if (
    !firstName ||
    !lastName ||
    !email ||
    !password ||
    password !== confirmPassword
  ) {
    return res.redirect("/signup");
  }

  // Check if the user already exists
  User.findOne({ email: email }, (err, foundUser) => {
    if (err) {
      console.log(err);
      return res.redirect("/signup");
    }

    if (foundUser) {
      return res.redirect("/signup");
    }

    // Create a new user
    const newUser = new User({
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
    });

    newUser.save((err) => {
      if (err) {
        console.log(err);
        return res.redirect("/signup");
      }

      // Set a cookie or session to remember the user is logged in
      res.cookie("user", email);
      res.redirect("/profile");
    });
  });
});

// Profile page
app.get("/profile", (req, res) => {
  // Check if the user is logged in (you can use cookies or sessions)
  const userEmail = req.cookies.user;

  if (!userEmail) {
    return res.redirect("/login");
  }

  // Find the user in the database using the email
  User.findOne({ email: userEmail }, (err, foundUser) => {
    if (err || !foundUser) {
      console.log(err);
      return res.redirect("/login");
    }

    // Render the profile page and pass the user's information
    res.render("profile", { user: foundUser });
  });
});

// Kart page
app.get("/kart", (req, res) => {
  res.sendFile(__dirname + "/public/kart.html");
});

// Settings page
app.get("/settings", (req, res) => {
  res.sendFile(__dirname + "/public/settings.html");
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
