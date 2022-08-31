const mongoose = require("mongoose")
const Schema = mongoose.Schema;

// const jwt = require('jsonwebtoken')

// const validator = require("validator")

let userSchema = new Schema({
    firstName: {
        type: String,
        // required: false,
        maxLength: 30,
        minLength: 3,
    },
    lastName: {
        type: String,
        // required: false,
        maxLength: 30,
        minLength: 3,
    },
    phoneNumber: {
        type: Number,
        // required: false,
        maxLength: 15,
        minLength: 10,
    },
    email: {
        type: String,
        // required: false,
        unique: true,
        default: null,
        match: [/[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?/, "Please enter a valid email address"],
        // validate: [validator.isEmail,"Please enter a valid email address"],
    },
    password: {
        type: String,
        // required: true,
        // match: [/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/],
    },
    profilePicture: {
        type: String,
        default: null,
    },
    address: {
        type: String,
        default: null,
    },
    position: {
        type: String,
        enum: ["a", "b", "c", "d", "e", "f"],
    },
    role: {
        type: String,
        default: "user"
    },
    verificationCode: {
        type: Number,
        default: null,
    },
    is_verified: {
        type: Number,
        default: 0,
    },
    is_notification: {
        type: Number,
        default: 1
    },
    is_blocked: {
        type: Number,
        default: 0,
    },
    user_authentication: {
        type: String,
        default: null,
    },
    //social login
    user_social_token: {
        type: String,
        required: false,
        trim: true,
        default: null
    },
    user_social_type: {
        type: String,
        required: false,
        trim: true,
        default: null
    },
    user_device_type: {
        type: String,
        required: false,
        trim: true,
        default: null
    },
    user_device_token: {
        type: String,
        required: false,
        trim: true,
        default: null
    }
}, {
    timestamps: true
});

// userSchema.methods.generateAuthToken = async function () {
//     const user = this;
//     const token = jwt.sign({
//         email: user.email,
//         _id: user._id
//     },
//         process.env.JWT_KEY);
//     // user.user_authentication = token;
//     await user.save();
//     //console.log("tokeeen--->", token);
//     return token;
// }

// Export the model
const User = mongoose.model("User", userSchema);
module.exports = User;