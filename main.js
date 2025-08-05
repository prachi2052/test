// app.js
const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json()); // for parsing application/json

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/mydb', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// User Schema
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String
});

// User Model
const User = mongoose.model('User', userSchema);

// Create User Route
app.post('/users', async (req, res) => {
  try {
    const user = new User(req.body); // assuming req.body has name, email, password
    const savedUser = await user.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
