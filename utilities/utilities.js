const https = require('https');

function cronJob (){
    setInterval(() => {
        https.get('https://boxdelabonita-server-13dd.onrender.com', (res) => {
            console.log('pinging...');
        })
    }, 840000);
}

module.exports = {
    cronJob
}
