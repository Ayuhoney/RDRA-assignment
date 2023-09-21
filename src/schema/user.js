const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    name: { type: String, required: false },
    age: { type: String, required: false },
    email: { type: String, required: false },
    mobileNumber: { type: Number, required: false },
    token: String
});

const User = mongoose.model('User', userSchema);


module.exports = User;