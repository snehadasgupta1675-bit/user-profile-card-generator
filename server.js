const express = require("express");
const path = require("path");

const app = express();
const PORT = 5000;

app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

app.post("/create-profile", (req, res) => {
  const { name, email, phone, age, skills, bio, image } = req.body;

  if (!name || !email || !phone || !age) {
    return res.status(400).json({
      message: "Please fill in all required fields."
    });
  }

  res.json({
    name,
    email,
    phone,
    age,
    skills,
    bio,
    image
  });
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});