const https = require('https');

function cronJob (){
    setInterval(() => {
        https.get('https://new-era-glazing-solution-server.onrender.com', (res) => {
            console.log('pinging...');
        })
    }, 840000);
}

module.exports = {
    cronJob
}
