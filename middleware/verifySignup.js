const User = require('../models/user')
const jwt = require("jsonwebtoken");
module.exports = {
    checkLogin(req, res, next) {
        const token = req.body.token || req.query.token || req.headers["x-access-token"];
        if (!token) {
            res.status(403).send("no authorized")
        }
        try {
            const decoded = jwt.verify(token, process.env.TOKEN_KEY);
            req.user = decoded;
        } catch (err) {
            res.status(403).send("no authorized")
            return;
        }
        return next();
    }
}