/*==========================================================//
   🔥 Initializing Firebase
//==========================================================*/

// VERSION 8 (current)
//==========================================================//
import config from "./config";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage";
import "firebase/database";
import "firebase/firestore";

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

export const auth = firebase.auth();
export const storage = firebase.storage();
export const database = firebase.database();
export const firestore = firebase.firestore();
export default firebase;
//==========================================================//

// VERSION 9 (beta)
//==========================================================//
import config from "./config";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { getFunctions } from "firebase/functions";
import { getMessaging } from "firebase/messaging";
import { getRemoteConfig } from "firebase/remote-config";

const firebaseApp = initializeApp(config);

export const auth = getAuth(firebaseApp);
export const storage = getStorage(firebaseApp);
export const database = getDatabase(firebaseApp);
export const firestore = getFirestore(firebaseApp);
export const analytics = getAnalytics(firebaseApp);
export const functions = getFunctions();
export const messaging = getMessaging();
export const remoteConfig = getRemoteConfig();

//==========================================================//
