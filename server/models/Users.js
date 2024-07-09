const { hash } = require('bcrypt');
const mongoose = require('mongoose');

const UsersSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50
    },
    lastName: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50
    },
    phone: {
        type: Number,
        required: true,
        minlength: 2,
        maxlength: 10
    },
    email: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 50
    },
    gender: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 10
    },
    nic: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 12
    },
    password: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 1024
    },
});

const UsersModel = mongoose.model('Users', UsersSchema);
module.exports = UsersModel;