const webpush = require('web-push');

// console.log(webpush.generateVAPIDKeys());

const publicKey = 'BPGr1obqRzkwt7ocarayUZPMJLNfeT5yMdMlnnEL3QSLBdlo2hEr6Q8eQlAvSl3_2_lR1jiCI2yDE3DqcbAgvIk';
const privateKey = 'VZLeyLDvIGUvJFqSkx9k33D_PPJoQIktY3NwGoyodvY';

//This will come from api call from frontend
const newSub = {
    endpoint: "https://fcm.googleapis.com/fcm/send/dgS078MAavQ:APA91bF1nwGQP0ZIqk57PNy-1w6t2jXqejO1ksjHPCN2gKmdAXmRxbmTQOALowDSBpm5VWHpxZS0pEH8hi4cyPbkVJgoNJVwdj8Jeiyp3tKuPISb0Hh5dZf8sHxu-u7FKEM32NJhuKHW",
    expirationTime: null,
    keys: {
        p256dh: "BNoj109NhnbaJQT6rwv_mrq3uDvpqEz4Poc0MAUg-XQnDWNE9uEygJG8xulOI8BIDIQZ0jPXjDAuFRT5hDgKtYU",
        auth: "2GkfDAVCAMdvvktRB2_FmA"
    }
}


webpush.setVapidDetails('mailto:paraschowdhary098@gmail.com', publicKey, privateKey);

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