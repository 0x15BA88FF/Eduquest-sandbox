const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    avatar: {
        type: String,
        required: true,
        default: "default.png"
    },
    date: {
        type: Date,
        required: true,
        default: Date.now
    },
    league: {
        type: Number,
        default: 0
    },
    exp: {
        type: Number,
        default: 0
    },
    gems: {
        type: Number,
        default: 0
    },
    life: {
        type: Number,
        default: 10
    },
    streak: {
        type: Number,
        default: 0
    },
    solveStreak: {
        type: Number,
        default: 0
    },
    solvedQuestions: {
        type: Array,
    }
});

module.exports = mongoose.model("User", userSchema);