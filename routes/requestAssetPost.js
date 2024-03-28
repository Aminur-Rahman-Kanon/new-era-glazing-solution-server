const app = require('express');
const router = app.Router();

router.post('/', async (req, res) => {
    const body = req.body;
    const request = body.requestType;
    if (request === 'by post'){
        return res.status(200).json({ status: 'success', method: 'post' });
    }
})

module.exports = router;
