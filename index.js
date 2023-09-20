const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const mongoose = require('mongoose');

 mongoose.connect('mongodb://localhost:27017/mydb', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log('Database connection successful');
    })
    .catch((error) => {
        console.error('Database connection failed', error);
    });

// Middleware
app.use(express.json());

// Import route handlers
let userRoutes = require('./routes/user');

// Use route handlers
app.use('', userRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

