const User = require('../models/user');
const jwt = require('jsonwebtoken');

const test = (req, res) => {
    res.json('test is working');
};

// Register Endpoint
const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Check if name was entered
        if (!name) {
            return res.json({
                error: 'name is required'
            });
        }

        // Check if password is good
        if (!password || password.length < 6) {
            return res.json({
                error: "password is required and should be at least 6 characters long"
            });
        }

        // Check email
        const exist = await User.findOne({ email });
        if (exist) {
            return res.json({
                error: 'Email is taken already'
            });
        }

        // Create user in Database
        const newUser = await User.create({
            name,
            email,
            password,
        });

        return res.json(newUser);

    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: 'Internal server error' });
    }
};

// Login Endpoint
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if user exists
        const user = await User.findOne({ email });
        if (!user) {
            return res.json({
                error: 'No user found'
            });
        }

        // Directly compare passwords
        if (user.password === password) {
            //res.json('Password match');
            jwt.sign({email:user.email , id: user._id, name:user.name},process.env.JWT_SECRET,{},(err,token) => {
                if(err) throw err;
                res.cookie('token',token).json(user)
            })
        } else {
            res.json('Password does not match');
        }

    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = {
    test,
    registerUser,
    loginUser
};
