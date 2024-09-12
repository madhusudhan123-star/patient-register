// File: index.js
const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

app.use(cors());
app.use(express.json());

const patientRoutes = require('./router/patientRoutes');

mongoose.connect(process.env.DATABASE_URL)
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.log('Error connecting to MongoDB:', err.message);
    });

app.use('/api', patientRoutes);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});