
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const crypto = require('crypto')
const jwt = require('jsonwebtoken');
const User = require('../src/schema/user');
const authenticateToken = require('../src/utils/auth');




router.post('/register', async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        let data = req.body;
        const secretKey = crypto.randomBytes(32).toString('hex');
        const user = await User.create({
            username: data.username,
            password: hashedPassword,
            age: data.age,
            name: data.name,
            mobileNumber: data.mobileNumber
        });
        const token = jwt.sign({ userId: user.id }, "secret-key", { expiresIn: '1h' });
        console.log(token);
        res.status(201).send(`${user} User registered successfully  and Token is ${token}`);
    } catch (error) {
        res.status(500).send('Error registering user');
    }
});


router.post('/login', async (req, res) => {
    const user = await User.findOne({ username: req.body.username });
    if (!user) return res.status(400).send('User not found');

    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) return res.status(400).send('Invalid password');

    const token = jwt.sign({ _id: user._id }, 'secret-key');
    res.header('Authorization', token).send('Login successful');
});

router.post('/forgot-password', async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await User.findOne({ username });
        if (!user) return res.status(400).send('User not found');
        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
            const hashedPassword = await bcrypt.hash(req.body.password, 10);
            const updatePassword = await User.findOneAndUpdate(
                { username: username },
                { password: hashedPassword }
            );
            console.log(updatePassword);
            res.status(200).send('Password reset successfully');
        } else {
            res.status(200).send(`Your password is ${password}`);

        }

    } catch (error) {
        console.error('Error processing forgot password request:', error);
        res.status(500).send('Error processing request');
    }
});
router.get('/users', authenticateToken, async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: 'Error retrieving users' });
    }
});
router.get('/users/:id', authenticateToken, async (req, res) => {
    try {
        const users = await User.findOne(req.query);
        if (users) {
            res.status(200).json(users);
        } else {
            res.status(401).json({ error: 'Users not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error retrieving users' });
    }
});
router.post('/users', authenticateToken, async (req, res) => {
    try {
        const users = await User.create(req.body);

        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: 'Error retrieving users' });
    }
});
router.put('/users/:id', authenticateToken, async (req, res) => {
    const users = await User.updateOne({ username: req.query.username }, {
        name: req.body.name,
        age: req.body.age,
        mobileNumber: req.body.mobileNumber
    });
    if (users) {
        res.status(200).json(users);
    } else {
        res.status(401).json({ error: "Error in update data" })
    }
});
router.delete('/users/:id', authenticateToken, async (req, res) => {
    let deleteUser = await User.deleteOne(req.query)
    if (deleteUser) {
        res.status(200).json(deleteUser);
    } else {
        res.status(401).json({ error: "Error in update data" })
    }
});

module.exports = router;