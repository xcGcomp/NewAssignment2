const User = require('../models/user')
const jwt = require("jsonwebtoken");

module.exports = {
    async check(req,res){
        const user = req.user;
        const newUser = await User.findById(user.user_id)
        if (newUser){
            res.status(200).send({
                username:newUser.username,
                token:newUser.token
            })
        }else {
            res.status(403).send("invalid authorized")
        }
    },
    async login(req, res) {
        console.log(req.body)
        const { username, password } = req.body;
        const user = await User.findOne({
            username
        })
        console.log(user)
        if (user && password == user.password) {
            const token = jwt.sign(
                { user_id: user._id, username },
                process.env.TOKEN_KEY,
                {
                    expiresIn: "2h",
                }
            );
            user.token = token
            user.save()
            res.status(200).send({
                code:1,
                token
            })
        } else {
            res.status(403).send("no authorized")
        }
    },
    async loginView(req, res){
        res.render("login");
    },
}