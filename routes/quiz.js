let express = require("express");
let router = express.Router()

router.get('/:subject', (req, res) => {
    res.render('quiz', {
        questionImage: null,
        question: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda aut est facere tempora, veritatis corrupti cum illo fugiat ab itaque!",
        answers: [ 12, 345, 5434, 5 ]
    });
});

router.get('/:subject/:id', (req, res) => {
    res.render('quiz', {
        questionImage: null,
        question: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda aut est facere tempora, veritatis corrupti cum illo fugiat ab itaque!",
        answers: [ 12, 345, 5434, 5 ]
    });
});

module.exports = router;