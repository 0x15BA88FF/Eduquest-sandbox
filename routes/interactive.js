let express = require("express");
let router = express.Router()

router.get('/:id', (req, res) => {
    res.render('interactive');
});

module.exports = router;