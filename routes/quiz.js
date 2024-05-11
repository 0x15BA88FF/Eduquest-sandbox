let express = require("express");
let router = express.Router()

router.get('/', (req, res) => {
    res.render('quiz', {
        questionImage: "",
        question: "Lorem",
        answers: [ 12, 345, 5434, 5 ]
    });
});

module.exports = router;