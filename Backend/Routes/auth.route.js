import express from 'express';

const router = express.Router();

router.get("/signup", (req, res)=>{
    res.send("SignUp Router called");
});

export default router;