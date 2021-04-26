const webpush = require('web-push');

// console.log(webpush.generateVAPIDKeys());

const publicKey = '';
const privateKey = '';

//This will come from api call from frontend
const newSub = {
    endpoint: "",
    expirationTime: null,
    keys: {
        p256dh: "",
        auth: ""
    }
}


webpush.setVapidDetails('mailto:', publicKey, privateKey);

const payload = {
    notification: {
        data: { url: 'https://www.google.com/' },
        title: 'My Email notification',
        vibrate: [100, 50, 100]
    }
};
try {
    console.log("I am here");
    webpush.sendNotification(newSub, JSON.stringify(payload)).then(data => console.log(data)).catch(err => console.log(err))
} catch (err) {
    console.log("inside error");
    console.log(err);
}
