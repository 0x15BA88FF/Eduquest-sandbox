let express = require("express");

let router = express.Router();
let userModel = require("../models/usermodel");

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.get("/", (req, res) => {
    res.render('signup', {
        notification: []
    });
})

router.post("/", async (req, res)=>{
    try{
        const Username = await req.body.username;
        const Password = await req.body.password;
        const userExists = await userModel.findOne({ username: Username });

        if (userExists) {
            let err = new Error('Username taken');
            err.message = "username has bee taken"

            return res.redirect('/signup', {
                notification: [
                    { level: "error", message: err.message }
                ]
            });
        }

        let user = new userModel({
            username: Username,
            password: Password,
        });

        let savedUser = await user.save();
        console.log(savedUser);
        
        res.redirect("/");
    } catch(err) {
        res.render("signup", {
            notification: [
                { level: "error", message: err.message }
            ]
        })
    }
});

module.exports = router;
