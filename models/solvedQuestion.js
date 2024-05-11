const mongoose = require("mongoose");

const solvedQuestionsSchema = mongoose.Schema({
    subjectId: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("SolvedQuestion", solvedQuestionsSchema);