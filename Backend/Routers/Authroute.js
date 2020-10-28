const express = require('express');
const bcrypt = require('bcryptjs');

const UserLogin = require('../Models/User');
const auth = require('../Middlewae/Auth');
const router = express.Router();

router.get('/api', (req, res) => {
    res.send("server is working");
})

router.post('/api/signup', async (req, res) => {
    try {
        const { email } = req.body;
        console.log(email);
        const user = await UserLogin.findOne({ email: email });
        if (!user) {
            const user = new UserLogin(req.body)
            await user.save()
            const token = await user.generateAuthToken()
            const userid = user._id;
            const useremail = user.email;
            const userType = user.user_type;
            res.status(200).json({ userid, useremail, token,userType})
        }
        else {
            res.status(401).json({ error: "email is already registered" })
        }

    } catch (error) {
        res.status(400).json(error.message)
    }
})

router.post('/api/signin', async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await UserLogin.findOne({ email });
        if (!user) {
            throw new Error('Invalid login credentials')
        }
        const isPasswordMatch = await bcrypt.compare(password, user.password)
        if (!isPasswordMatch) {
            return res.status(401).send({ error: 'Invalid login credentials' })
        }
        if (!user) {
            return res.status(401).send({ error: 'Login failed! Check authentication credentials' })
        }
        const token = await user.generateAuthToken();
        const userid = user._id;
        const useremail = user.email;
        res.status(200).json({ userid, useremail, token,})
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})


//view loggedin profile
router.get('/api/me', auth, async (req, res) => {
    try {
        const user = req.user;
        const userDetails = await UserLogin.findOne({ email: user.email })
        res.status(200).json(userDetails);
    }
    catch (err) {
        res.status(400).json({ error: err.message })
    }
})

router.get('/api/logout', auth, async (req, res) => {
    try {
        req.user.tokens = req.user.tokens.filter((token) => {
            return token.token != req.token
        })
        await req.user.save()
        res.status(200).json({ message: "success" });
    } catch (error) {
        res.status(500).send(error.message)
    }
})


module.exports = router;