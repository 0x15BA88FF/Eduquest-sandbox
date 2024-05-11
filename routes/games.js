let express = require("express");
let router = express.Router()

router.get('/', (req, res) => {
    res.render('games', {
        username: "John Doe",
        avatar: "",
        exp: "125",
        gems: 24,
        life: 10,
        streak: 1,
        subjects: [
            { image: "", name: "Elective ICT" },
            { image: "", name: "Elective Mathematics" },
            { image: "", name: "Intergrated Science" }
        ]
    });
});

module.exports = router;