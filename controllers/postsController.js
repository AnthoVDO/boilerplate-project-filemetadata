const express = require("express");
const router = express.Router();
const multer = require("multer");
const upload = multer({dest: "uploads/"})

//upload a file

router.post("/fileanalyse", upload.single("upfile"), (req, res)=>{
    const fileInfo = {
        "name": req.file.originalname,
        "type": req.file.mimetype,
        "size": req.file.size
    }
    res.json(fileInfo);
})

module.exports = router;