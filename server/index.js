const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
const { mongoose } = require('mongoose');
const cookieParser = require('cookie-parser')
const app = express();
const userRoutes = require('./routes/authRoutes'); // Adjust the path as necessary


// Database connection
mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log('Database Connected'))
    .catch((err) => console.log('Database not connected', err)); // Fix: Pass `err` as a parameter

// Middleware
app.use(express.json());
app.use(cors({
    credentials: true,
    origin: 'http://localhost:5173'
}));
app.use(cookieParser());
app.use(express.urlencoded({extended:false}))

// Routes
app.use('/', require('./routes/authRoutes'));
app.use('/api', userRoutes);
const appoinmentRouter = require("./routes/appoinments");
const formRouter = require("./routes/forms");

app.use("/appoinment",appoinmentRouter);
app.use("/form",formRouter);

const port = 8000;
app.listen(port, () => console.log(`Server is running on port ${port}`));