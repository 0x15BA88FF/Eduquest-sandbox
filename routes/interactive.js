let express = require("express");
let router = express.Router()

router.get('/:id', (req, res) => {
    res.render('interactive', { route: "Simulation" });
});

module.exports = router;