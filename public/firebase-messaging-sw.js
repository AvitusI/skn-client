// Scripts for firebase and firebase messaging
importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js"
);

// Initialize the Firebase app in the service worker
// "Default" Firebase configuration (prevents errors)
const firebaseConfig = {
  apiKey: "AIzaSyBOViMTj5XLbkwu0yYvbL3Ju1hoeoIhrvc",
  authDomain: "next-auth-demo-431417.firebaseapp.com",
  projectId: "next-auth-demo-431417",
  storageBucket: "next-auth-demo-431417.firebasestorage.app",
  messagingSenderId: "8133289816",
  appId: "1:8133289816:web:beb3e86ad4403b3189e72d",
  measurementId: "G-YZVVV1YBYR"
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

/*
messaging.onBackgroundMessage((payload) => {
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.image,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
*/

messaging.onBackgroundMessage((payload) => {
  const notification = payload.data || payload.notification || {};
  const notificationTitle = notification.title || "New message";
  const notificationOptions = {
    body: notification.body,
    icon: notification.image,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
