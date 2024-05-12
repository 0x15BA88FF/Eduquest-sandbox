let express = require("express");
let router = express.Router()

router.get('/:game', (req, res) => {
    res.render('games', {
        username: "John Doe",
        avatar: "default.png",
        exp: "125",
        gems: 24,
        life: 10,
        streak: 1,
        subjects: [
            { image: "", name: "Hang Man" }
        ]
    });
});

module.exports = router;