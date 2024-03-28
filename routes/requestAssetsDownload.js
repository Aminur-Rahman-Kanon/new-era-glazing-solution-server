const app = require('express');
const router = app.Router();
const path = require('path');

router.post('/', async (req, res) => {
    const body = req.body;
    if (body) {
        const requestType = body.requestType;
        if (requestType === 'download'){
            const option = {
                root: path.join(__dirname, '..', 'public/assets/fileToDownload')
            }

            res.sendFile('brochure.zip', option, (err) => {
                if (err) {
                    console.log(err);
                }
                else {
                    console.log('file snet');
                }
            })
        }
        else {
            return res.status(200).json({ status: 'success', method: 'post' });
        }
    }
})


module.exports = router;
