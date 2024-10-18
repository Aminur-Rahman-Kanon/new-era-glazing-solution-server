const https = require('https');
const path = require('path');
const nodemailer = require('nodemailer');

function cronJob (){
    setInterval(() => {
        https.get('https://new-era-glazing-solution-server-f28f.onrender.com', (res) => {
            console.log('pinging...');
        })
    }, 840000);
}

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "acharjeesupan@gmail.com",
        pass: "ucmrhehbrmysvxby"
    }
});

async function sendBrochureQuery(data) {
    if (!transporter) return { status: 'failed', msg: 'no transporter found' };

    try {
        const info = await transporter.sendMail({
            from: '"New Age Service 👻" <acharjeesupan@gmail.com>', // sender address
            to: "newera.gsltd@gmail.com", // list of receivers
            subject: "New Brochure Request Received", // Subject line
            text: "A new Brochure request just received. Please respond asap", // plain text body
            html: `<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Your Awesome Email</title>
            </head>
            <body>
                <div style="width: 100%;">
                    <p>A new brochure request received</p>
                    <div style="width: 100%; display: flex; justify-content: flex-start; align-items: center;">
                        <span style="padding: 5px; box-sizing: border-box;">Full name</span>
                        <span style="padding: 5px; box-sizing: border-box;">${data.name}</span>
                    </div>
                    <div style="width: 100%; display: flex; justify-content: flex-start; align-items: center;">
                        <span style="padding: 5px; box-sizing: border-box;">Phone number</span>
                        <span style="padding: 5px; box-sizing: border-box;">${data.phone}</span>
                    </div>
                    <div style="width: 100%; display: flex; justify-content: flex-start; align-items: center;">
                        <span style="padding: 5px; box-sizing: border-box;">Email address</span>
                        <span style="padding: 5px; box-sizing: border-box;">${data.email}</span>
                    </div>
                    <div style="width: 100%; display: flex; justify-content: flex-start; align-items: center;">
                        <span style="padding: 5px; box-sizing: border-box;">Project address</span>
                        <span style="padding: 5px; box-sizing: border-box;">${data.address}</span>
                    </div>
                    <div style="width: 100%; display: flex; justify-content: flex-start; align-items: center;">
                        <span style="padding: 5px; box-sizing: border-box;">Product name</span>
                        <span style="padding: 5px; box-sizing: border-box;">${data.product}</span>
                    </div>
                </div>
            </body>
            </html>`
        });

        return { status: 'success', msg: `Message sent to ${info.messageId}` };
    } catch (error) {
        return { status: 'failed', msg: 'failed to send mail' }
    }
}

async function sendContactQuery(data) {
    if (!transporter) return { status: 'failed', msg: 'no transporter found' };

    try {
        const info = await transporter.sendMail({
            from: '"New Age Service 👻" <acharjeesupan@gmail.com>', // sender address
            to: "newera.gsltd@gmail.com", // list of receivers
            subject: "New Customer Query Received", // Subject line
            text: "A new customer query just received. Please respond asap", // plain text body
            html: `<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Your Awesome Email</title>
            </head>
            <body>
                <div style="width: 100%;">
                    <div style="width: 100%; display: flex; justify-content: flex-start; align-items: center;">
                        <span style="padding: 5px; box-sizing: border-box;">Full name</span>
                        <span style="padding: 5px; box-sizing: border-box;">${data.name}</span>
                    </div>
                    <div style="width: 100%; display: flex; justify-content: flex-start; align-items: center;">
                        <span style="padding: 5px; box-sizing: border-box;">Phone number</span>
                        <span style="padding: 5px; box-sizing: border-box;">${data.number}</span>
                    </div>
                    <div style="width: 100%; display: flex; justify-content: flex-start; align-items: center;">
                        <span style="padding: 5px; box-sizing: border-box;">Email address</span>
                        <span style="padding: 5px; box-sizing: border-box;">${data.email}</span>
                    </div>
                    <div style="width: 100%; display: flex; justify-content: flex-start; align-items: center;">
                        <span style="padding: 5px; box-sizing: border-box;">Project address</span>
                        <span style="padding: 5px; box-sizing: border-box;">${data.address}</span>
                    </div>
                    <div style="width: 100%; display: flex; justify-content: flex-start; align-items: center;">
                        <span style="padding: 5px; box-sizing: border-box;">Product name</span>
                        <span style="padding: 5px; box-sizing: border-box;">${data.product}</span>
                    </div>
                    <div style="width: 100%; display: flex; justify-content: flex-start; align-items: center;">
                        <span style="padding: 5px; box-sizing: border-box;">Product color</span>
                        <span style="padding: 5px; box-sizing: border-box;">${data.color}</span>
                    </div>
                    <div style="width: 100%; display: flex; justify-content: flex-start; align-items: center;">
                        <span style="padding: 5px; box-sizing: border-box;">Attchment</span>
                    </div>
                </div>
            </body>
            </html>`,
            attachments: [
                {
                    filename: data.attachment.originalname,
                    content: data.attachment.buffer
                }
            ]
        });

        return { status: 'success', msg: `Message sent to ${info.messageId}` };
    } catch (error) {
        return { status: 'failed', msg: 'failed to send mail' }
    }
}


async function sendQuery(data) {
    if (!transporter) return { status: 'failed', msg: 'no transporter found' };

    try {
        const info = await transporter.sendMail({
            from: '"New Age Service 👻" <acharjeesupan@gmail.com>', // sender address
            to: "info@neweraglazingsolutions.co.uk", // list of receivers
            subject: "New Contact Query Received", // Subject line
            text: "A customer wants to contact. Please respond asap", // plain text body
            html: `<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Your Awesome Email</title>
            </head>
            <body>
                <div style="width: 100%;">
                    <div style="width: 100%; display: flex; justify-content: flex-start; align-items: center;">
                        <span style="padding: 5px; box-sizing: border-box;">Full name</span>
                        <span style="padding: 5px; box-sizing: border-box;">${data.name}</span>
                    </div>
                    <div style="width: 100%; display: flex; justify-content: flex-start; align-items: center;">
                        <span style="padding: 5px; box-sizing: border-box;">Phone number</span>
                        <span style="padding: 5px; box-sizing: border-box;">${data.phone}</span>
                    </div>
                    <div style="width: 100%; display: flex; justify-content: flex-start; align-items: center;">
                        <span style="padding: 5px; box-sizing: border-box;">Email address</span>
                        <span style="padding: 5px; box-sizing: border-box;">${data.email}</span>
                    </div>
                    <div style="width: 100%; display: flex; justify-content: flex-start; align-items: center;">
                        <span style="padding: 5px; box-sizing: border-box;">Project address</span>
                        <span style="padding: 5px; box-sizing: border-box;">${data.postCode}</span>
                    </div>
                    <div style="width: 100%; display: flex; justify-content: flex-start; align-items: center;">
                        <span style="padding: 5px; box-sizing: border-box;">Product name</span>
                        <span style="padding: 5px; box-sizing: border-box;">${data.product}</span>
                    </div>
                    <div style="width: 100%; display: flex; justify-content: flex-start; align-items: center;">
                        <span style="padding: 5px; box-sizing: border-box;">Additional info</span>
                        <span style="padding: 5px; box-sizing: border-box;">${data.details}</span>
                    </div>
                </div>
            </body>
            </html>`
        });

        return { status: 'success', msg: `Message sent to ${info.messageId}` };
    } catch (error) {
        return { status: 'failed', msg: 'failed to send mail' }
    }
}


module.exports = {
    cronJob, sendContactQuery, sendBrochureQuery, sendQuery
}
