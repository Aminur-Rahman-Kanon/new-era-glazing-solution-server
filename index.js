const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
app.use(bodyParser.json());
app.use(cors({ origin: ['http://localhost:3000', 'https://new-era-glazing-solution.onrender.com'] }));
const requestAssetsDownload = require('./routes/requestAssetsDownload');
const requestAssetsPost = require('./routes/requestAssetPost');
const fetchProduct = require('./routes/fetchProduct');
require('dotenv').config();
const { cronJob } = require('./utilities/utilities');
// const { productModel } = require('./schema/schema');


app.use('/request-assets-download', requestAssetsDownload);
app.use('/request-assets-post', requestAssetsPost);
app.use('/fetch-products', fetchProduct);

// app.post('/upload', async (req, res) => {
//     const data = req.body;

//     const dataToUpload = {
//         title: data.title,
//         product: {
//             header1: {
//                 bg: 'http://localhost:8080/assets/products/xp_view/header1/h1.jpg',
//                 heading: data.header1Heading,
//                 title: data.header1Title
//             },
//             header2: {
//                 bg: 'http://localhost:8080/assets/products/xp_view/header2/h2.jpg',
//                 heading: data.header2Heading,
//                 title: data.header2Title
//             },
//             header3: {
//                 heading: data.header3Heading,
//                 title: data.header3Title
//             },
//             header4: {
//                 bg: 'http://localhost:8080/assets/products/xp_view/header4/h4.jpg',
//                 features: data.header4Key,
//             },
//             header5: {
//                 img: [
//                     'http://localhost:8080/assets/products/xp_view/header5/h5_1.jpg',
//                     'http://localhost:8080/assets/products/xp_view/header5/h5_2.jpg',
//                     'http://localhost:8080/assets/products/xp_view/header5/h5_3.jpg',
//                     'http://localhost:8080/assets/products/xp_view/header5/h5_4.jpg',
//                 ],
//             },
//             header6: {
//                 img: [
//                     'http://localhost:8080/assets/products/xp_view/header6/h6_1.jpg',
//                     'http://localhost:8080/assets/products/xp_view/header6/h6_1.jpg',
//                     'http://localhost:8080/assets/products/xp_view/header6/h6_1.jpg',
//                     'http://localhost:8080/assets/products/xp_view/header6/h6_1.jpg',
//                 ],
//                 heading: data.header6Heading,
//                 title: data.header6Title
//             },
//             header7: {
//                 img: [
//                     'http://localhost:8080/assets/products/xp_view/header7/h7_1.jpg',
//                     'http://localhost:8080/assets/products/xp_view/header7/h7_1.jpg',
//                     'http://localhost:8080/assets/products/xp_view/header7/h7_1.jpg',
//                     'http://localhost:8080/assets/products/xp_view/header7/h7_1.jpg',
//                 ],
//             },
//             header8: {
//                 heading: data.header8Heading,
//                 title: data.header8Title,
//                 specs: data.header8Spec
//             },
//             header9: {
//                 bg: 'http://localhost:8080/assets/products/xp_view/header9/h9.jpg',
//                 heading: data.header9Heading,
//                 title: data.header9Title,
//                 color: [
//                     {
//                         title: '9007 Sliver Grey',
//                         value: '#b5b0a1'
//                     },
//                     {
//                         title: '7021 Black Grey',
//                         value: '#2f3234'
//                     },
//                     {
//                         title: '7032 Pebble Grey',
//                         value: '#b5b0a1'
//                     }
//                 ]
//             }
//         }
//     }

//     await productModel.create(dataToUpload).then(response => console.log(response)).catch(err => console.log(err));
// })


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