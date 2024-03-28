const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
app.use(bodyParser.json());
app.use(cors({ origin: ['http://localhost:3000'] }));
const requestAssetsDownload = require('./routes/requestAssetsDownload');
const requestAssetsPost = require('./routes/requestAssetPost');
require('dotenv').config();


app.use('/request-assets-download', requestAssetsDownload);
app.use('/request-assets-post', requestAssetsPost);


app.listen(process.env.PORT || '8080', (err) => {
    if (err) {
        console.log(err);
    }
    console.log('server is listening to port 8080');
});