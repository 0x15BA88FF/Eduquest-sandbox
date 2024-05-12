let express = require("express");
let router = express.Router()

router.get('/', (req, res) => {
    res.render('profile', {
        username: "John Doe",
        avatar: "default.png",
        exp: "125",
        gems: 24,
        life: 10,
        streak: 1,
        subjects: [
            { image: "core-maths.png", name: "Core Mathematics" },
            { image: "elective-maths.png", name: "Elective Mathematics" },
            { image: "intergrated-science.png", name: "Intergrated Science" }
        ]
    });
});

router.get('/:username', (req, res) => {
    res.render('profile', {
        username: "John Doe",
        avatar: "default.png",
        exp: "125",
        gems: 24,
        life: 10,
        streak: 1,
        subjects: [
            { image: "core-maths.png", name: "Core Mathematics" },
            { image: "elective-maths.png", name: "Elective Mathematics" },
            { image: "intergrated-science.png", name: "Intergrated Science" }
        ]
    });
});

module.exports = router;