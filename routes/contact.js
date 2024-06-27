const express = require('express');
const router = express.Router();
const { sendQuery } = require('../utilities/utilities');

router.post('/', async (req, res) => {
    const data = req.body;

    const response = await sendQuery(data);
    
    if (response.status === 'success'){
        return res.status(200).json({ status: 'success' })
    }
    else {
        return res.status(401).json({ status: 'failed' });
    }
})

module.exports = router;
