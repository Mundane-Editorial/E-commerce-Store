import express from 'express';

const router = express.Router();


//signup auth route
router.get("/signup", (req, res)=>{
    res.send("SignUp Router called");
});


//login auth route
router.get("/login", (req, res)=>{
    res.send("Login Router called");
});


//logout auth route
router.get("/logout", (req, res)=>{
    res.send("Log Out Router called");
});

export default router;