const express = require("express");
const router = express.Router();

router.get('/getAbout', (req, res) => {
    console.log('req: ', req);
    console.log('res: ', res);
    res.json({ message: 'Success', data: req.body })
})
