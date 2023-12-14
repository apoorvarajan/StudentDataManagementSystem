const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5001;

// Enable CORS for all routes
app.use(cors());

// Your route handling
app.post('/auth', (req, res) => {
  // Handle the POST request for /auth
  res.json({ message: 'Authentication successful' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});