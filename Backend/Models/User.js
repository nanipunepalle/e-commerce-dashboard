const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

//mongoose schema for user

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
    },
    phno: {
        type: String,
        // required: true,
        unique: true,
    },
    user_type: {
        type: String
    },
    tokens: [{
        token: {
            type: String,
            required: true
        }
    }],
    signup_time: {
        type: String,
        default: Date.now()
    },
})
userSchema.pre('save', async function (next) {
    // Hash the password before saving the user model
    const user = this
    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 8)
    }
    next()
})


userSchema.methods.generateAuthToken = async function() {
    // Generate an auth token for the user
    const user = this
    const token = jwt.sign({_id: user._id}, process.env.JWT_KEY)
    user.tokens = user.tokens.concat({token})
    await user.save()
    return token
}



const UserLogin = mongoose.model('UserLogin', userSchema)

module.exports = UserLogin