const express = require("express");
const router = express.Router();
const {auth, isAdmin, isStudent} = require("../middlewares/auth");

const {login, signup} = require("../controllers/auth");

router.post("/login", login);
router.post("/signup", signup)


router.get("/test", auth, (req, res) => {
    res.json({
        success:true,
        msg:"Welcome to test route"
    })
})

//protected route
router.get("/student", auth, isStudent, (req, res) => {
    res.json({
        success:true,
        msg:"Welcome to student route"
    })
})

router.get("/admin", auth, isAdmin, (req, res) => {
    res.json({
        success:true,
        msg:"Welcome to Admin route"
    })
})

module.exports = router;