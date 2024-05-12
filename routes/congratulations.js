let express = require("express");
let router = express.Router()

router.get('/', (req, res) => {
    res.render('congratulations', {
        avatar: "default.png",
        username: "John Doe",
        exp: 4906,
        solvedQuestions: 9,
        totalQuestions: 10
    });
});

module.exports = router;