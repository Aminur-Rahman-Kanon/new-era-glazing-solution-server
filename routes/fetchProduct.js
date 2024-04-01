const express = require('express');
const router = express.Router();
const { productModel } = require('../schema/schema');

router.get('/', async (req, res) => {
    await productModel.find().lean()
    .then(result => {
        if (result.length){
            return res.status(200).json({ status: 'success', data: result })
        }
        else {
            res.status(400)
        }
    })
    .catch(err => res.status(500));
})

module.exports = router;
