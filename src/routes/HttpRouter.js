const express = require("express");
const router = express.Router();

router.get('/getAbout', (req, res) => {
    console.log('req.query: ', req.query); // GET 요청의 데이터는 보통 query로 들어옴
    res.json({ message: 'Success', data: req.query });
});

module.exports = router;
