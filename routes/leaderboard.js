let express = require("express");
let router = express.Router()

router.get('/', (req, res) => {
    res.render('leaderboard', {
        users: [
            { avatar: "default.png", username: "John Doe", exp: 3000 },
            { avatar: "default.png", username: "John Doe", exp: 3000 },
            { avatar: "default.png", username: "John Doe", exp: 3000 },
            { avatar: "default.png", username: "John Doe", exp: 3000 }
        ]
    });
});


module.exports = router;