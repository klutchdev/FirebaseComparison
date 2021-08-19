/*===================================================================//
   VERSION 8 (current)
//===================================================================*/
import { messaging } from "./init-firebase";

// Get a registration token
const getRegistrationToken = async (publicKey) => {
  await messaging
    .getToken({ vapidKey: publicKey })
    .then((currentToken) => {
      if (currentToken) {
        // Send the token to your server and update the UI if necessary
        console.log(currentToken);
      } else {
        console.log("No registration token available. Request permission to generate one.");
      }
    })
    .catch((err) => {
      console.log("An error occurred while retrieving token. ", err);
      // .
    });
};

// Handle foreground messages
messaging.onMessage((payload) => {
  console.log("Message received. ", payload);
  // ...
});

// Handle background message from a service worker (firebase-messaging.js)
messaging.onBackgroundMessage((payload) => {
  console.log("[firebase-messaging-sw.js] Received background message ", payload);
  // Customize notification here
  const notificationTitle = "Some Title";
  const notificationOptions = {
    body: "Some content",
    icon: "/some-icon-file.png",
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});

/*===================================================================//
   VERSION 9 (beta)
//===================================================================*/
import { messaging } from "./init-firebase";
import { getToken, onMessage, onBackgroundMessage } from "firebase/messaging";

// Get a registration token
const getRegistrationToken = async (publicKey) => {
  await getToken(messaging, { vapidKey: publicKey })
    .then((currentToken) => {
      if (currentToken) {
        // Send the token to your server and update the UI if necessary
        console.log(currentToken);
      } else {
        console.log("No registration token available. Request permission to generate one.");
      }
    })
    .catch((err) => {
      console.log("An error occurred while retrieving token. ", err);
      // .
    });
};

// Handle foreground messages
onMessage(messaging, (payload) => {
  console.log("Message received. ", payload);
  // ...
});

// Handle background message from a service worker (firebase-messaging.js)
onBackgroundMessage(messaging, (payload) => {
  console.log("[firebase-messaging-sw.js] Received background message ", payload);
  // Customize notification here
  const notificationTitle = "Some Title";
  const notificationOptions = {
    body: "Some content",
    icon: "/some-icon-file.png",
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
