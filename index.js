const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
app.use(bodyParser.json());
app.use(cors({ origin: ['http://localhost:3000', 'https://new-era-glazing-solution-uze8.onrender.com', 'https://www.neweraglazingsolutionsltd.co.uk'] }));
const requestAssetsDownload = require('./routes/requestAssetsDownload');
const requestAssetsPost = require('./routes/requestAssetPost');
const fetchProduct = require('./routes/fetchProduct');
require('dotenv').config();
const { cronJob } = require('./utilities/utilities');
const contactQuery = require('./routes/contactQuery');
const contact = require('./routes/contact');


app.use('/request-assets-download', requestAssetsDownload);
app.use('/request-assets-post', requestAssetsPost);
app.use('/fetch-products', fetchProduct);
app.use('/contact-query', contactQuery);
app.use('/contact', contact);


if (process.env.NODE_ENV === 'production') {
    app.use(express.static('public'));
}

app.use(express.static('public'));

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(res => console.log('database connected')).catch(err => console.log(err));

app.listen(process.env.PORT || '8080', (err) => {
    if (err) {
        console.log(err);
    }
    cronJob();
    console.log('server is listening to port 8080');
});