const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const UsersModel = require('./models/Users');
const bcrypt = require('bcrypt');

const app = express();
app.use(express.json());
app.use(cors())

mongoose.connect('mongodb://localhost:27017/mybank');

app.delete('/deleteUser/:id', (req, res) => {
    const id = req.params.id;
    UsersModel.findByIdAndDelete({ _id:id })
        .then(users => {
            res.json(users);
        })
        .catch(err => {
            res.json(err);
        });
});

app.put('/updateUser/:id', (req, res) => {
    const id = req.params.id;
    UsersModel.findByIdAndUpdate({_id:id}, {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        phone: req.body.phone,
        email: req.body.email,
        gender: req.body.gender,
        nic: req.body.nic,
        password: req.body.password,
        // rePassword: req.body.rePassword,
    }
    )
    .then(users => {
        res.json(users);
    })
    .catch(err => {
        res.json(err);
    });
});

app.get('/getUserByEmail/:email', (req, res) => {
    const email = req.params.email;
    UsersModel.findOne({ email }) // Replace 'email' with the field name in your MongoDB schema
        .then(user => {
            res.json(user);
        })
        .catch(err => {
            res.status(500).json({ error: "User not found" });
        });
});

app.get('/getUser/:id', (req, res) => {
    const id = req.params.id;
    UsersModel.findById({ _id:id })
        .then(users => {
            res.json(users);
        })
        .catch(err => {
            res.json(err);
        });

});

app.get('/users', (req, res) => {
    UsersModel.find({})
        .then(users => {
            res.json(users);
        })
        .catch(err => {
            res.json(err);
        });
});

app.post('/login', (req, res) => {
    const { email, password } = req.body;
    console.log("email", email);
    console.log("password", password);
    UsersModel.findOne({ email: email})
        .then(user => {
            console.log("user", user);
            if (user) {
                console.log("user", user);
                // Compare the provided password with the stored hashed password
                console.log("user.password", user.password);
                console.log("password", password);
                const passwordMatch = bcrypt.compareSync(password, user.password);
                if (passwordMatch) {
                    res.json({ status: 'ok', name: user.name });
                    console.log("success");
                } else {
                    res.json({ status: 'error', error: 'Invalid password' });
                }
            } else {
                res.json({ status: 'error', error: 'Invalid email/password' });
            }
        })
        .catch(err => {
            res.json({ status: 'error', err: 'No User Exists' });
        });
});

app.post('/registration', (req, res) => {
    UsersModel.create(req.body)
        .then(users => {
            res.json(users);
        })
        .catch(err => {
            res.json(err);
        });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
