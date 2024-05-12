let express = require("express");

let router = express.Router();
let userModel = require("../models/usermodel");

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.get("/", (req, res)=>{
    res.render('signup');
})

router.post("/", async (req, res)=>{
    try{
        const Username = await req.body.username;
        const Password = await req.body.password;
        const userExists = await userModel.findOne({ username: Username });

        if (userExists) {
            err = "username has bee taken"
            return res.redirect('/signup', { errors: [ err ] });
        }

        let user = new userModel({
            username: Username,
            password: Password,
        });

        let savedUser = await user.save();
        console.log(savedUser);
        
        res.redirect("/");
    } catch(err) {
        console.log(err.message);
        res.render("signup", { errors: [ err.message ] })
    }
});

module.exports = router;
