const app = require('express');
const router = app.Router();
const { sendBrochureQuery } = require('../utilities/utilities');

router.post('/', async (req, res) => {
    const body = req.body;
    const request = body.requestType;
    if (request === 'by post' || request === 'by email'){
        const sendingStatus = await sendBrochureQuery(body);
        console.log(sendingStatus);
        if (sendingStatus.status === 'success'){
            return res.status(200).json({ status: 'success' });
        }
        else {
            return res.status(400).json({ status: 'failed', msg: 'failed to send message' });
        }
    }
})

module.exports = router;
