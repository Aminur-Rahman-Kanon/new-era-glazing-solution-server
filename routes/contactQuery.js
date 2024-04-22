const express = require('express');
const router = express.Router();
const multer = require('multer');
const nodemailer = require('nodemailer');
const upload = multer({ storage: multer.memoryStorage() });
const { sendContactQuery } = require('../utilities/utilities');

router.post('/', upload.single('attachment'), async (req, res) => {
    let data;
    let attachment;
    
    if (req.body.data){
        data = JSON.parse(req.body.data);
    }

    if (!data) return res.status(400).json({ status: 'failed', msg: 'data error' });
    
    if (req.file){
        attachment = req.file;
    }
    else {
        attachment = 'no attachment'
    }

    const dataToSend = { ...data, attachment }
    
    const sendStatus = await sendContactQuery(dataToSend);
    if (sendStatus.status === 'success'){
        return res.status(200).json({ status: 'success' })
    }
    else {
        return res.status(400).json({ status: 'failed' });
    }
})

module.exports = router;
