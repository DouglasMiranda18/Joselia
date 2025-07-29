importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');

firebase.initializeApp({
  apiKey: "AIzaSyDIeImR1lRYdEBCVhcB2gdm2NIogUEh1FU",
  authDomain: "joselia-24972.firebaseapp.com",
  projectId: "joselia-24972",
  messagingSenderId: "62542621074",
  appId: "1:62542621074:web:16d0b1aaef8a41c2a7794b"
});

const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function(payload) {
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/icon.png'
  };
  return self.registration.showNotification(notificationTitle, notificationOptions);
}); 
