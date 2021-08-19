/*===================================================================//
   VERSION 8 (current)
//===================================================================*/
import firebase, { auth } from "./init-firebase";

const auth = firebase.auth();

// Auth state listener
auth.onAuthStateChanged((user) => {
  if (user) {
    // Signed in
  } else {
    // Signed out
  }
});

// Update user profile
const updateUserProfile = async (newDisplayName, someImageUrl) => {
  await auth.currentUser
    .updateProfile({
      displayName: newDisplayName,
      photoURL: someImageUrl,
    })
    .then(() => {
      // Success!
    })
    .catch((err) => {
      console.log(err.code);
      console.log(err.message);
    });
};

// Send user verification email
const verifyUserEmail = async () => {
  await auth.currentUser.sendEmailVerification().then(() => {
    // Sent!
  });
};

// Set a users email
const updateUserEmail = async (email) => {
  await auth.currentUser.updateEmail(email).then(() => {
    // Updated!
  });
};

// Set a users password
const updateUserPassword = async (newPassword) => {
  await auth.currentUser.updatePassword(newPassword).then(() => {
    // Updated!
  });
};

// Delete a user
const userDelete = async () => {
  await auth.currentUser.delete().then(() => {
    // Deleted!
  });
};

// Send a password reset email
const resetPassword = async (email) => {
  await auth.currentUser.sendPasswordResetEmail(email).then(() => {
    // Sent!
  });
};

// Get a user ID token
const getUserToken = async () => {
  await auth.currentUser.getIdToken().then(() => {
    // Success
  });
};

// Set language code
const setLanguage = async (languageCode) => {
  auth.languageCode = languageCode; // "it", "en", etc...
};

// Sign in with Email and password
const emailSignIn = async (email, password) => {
  await signInWithEmailAndPassword(email, password).then(() => {
    // Signed in!
  });
};

const phoneNumberSignIn = async (phoneNumber, appVerifier) => {
  await auth.signInWithPhoneNumber(phoneNumber, appVerifier).then((confirmationResult) => {
    // SMS sent. Prompt user to type the code from the message, then sign the
    // user in with confirmationResult.confirm(code).
    window.confirmationResult = confirmationResult;
    // ...
  });
};

// Providers
const googleProvider = new firebase.auth.GoogleAuthProvider();
const facebookProvider = new firebase.auth.FacebookAuthProvider();
const appleProvider = new firebase.auth.OAuthProvider("apple.com");
const twitterProvider = new firebase.auth.TwitterAuthProvider();
const githubProvider = new firebase.auth.GithubAuthProvider();
const microsoftProvider = new firebase.auth.OAuthProvider("microsoft.com");
const yahooProvider = new firebase.auth.OAuthProvider("yahoo.com");

// Sign in with a provider
const providerSignIn = async (someProvider) => {
  await auth.signInWithPopup(someProvider).then(() => {
    // Signed in!
  });
};

// Anonymous user sign in
const anonSignIn = async () => {
  await auth.signInAnonymously().then(() => {
    // Signed in!
  });
};

// Sign user out
const signOutUser = async () => {
  await auth.currentUser.signOut();
};

// Create new email and password user
const createNewEmailAndPassUser = async (email, password) => {
  await auth.createUserWithEmailAndPassword(email, password).then(() => {
    // Signed in
  });
};

// Sign in user with a magic email link
const sendMagicSignInLink = async (email, actionCodeSettings) => {
  await auth.sendSignInLinkToEmail(email, actionCodeSettings).then(() => {
    // Sent!
    window.localStorage.setItem("emailForSignIn", email);
  });
  // Confirm the link is a sign-in with email link:
  if (auth.isSignInWithEmailLink(window.location.href)) {
    let email = window.localStorage.getItem("emailForSignIn");
    if (!email) {
      email = window.prompt("Please provide your email for confirmation");
    }
    await auth.signInWithEmailLink(email, window.location.href).then(() => {
      window.localStorage.removeItem("emailForSignIn");
    });
  }
};

/*===================================================================//
   VERSION 9 (beta)
//===================================================================*/
import { auth } from "./init-firebase";
import {
  onAuthStateChanged,
  updateProfile,
  sendEmailVerification,
  updateEmail,
  updatePassword,
  deleteUser,
  sendPasswordResetEmail,
  getIdToken,
  signInWithEmailAndPassword,
  signInWithPhoneNumber,
  sendSignInLinkToEmail,
  isSignInWithEmailLink,
  GoogleAuthProvider,
  FacebookAuthProvider,
  GithubAuthProvider,
  TwitterAuthProvider,
  OAuthProvider,
  signInWithPopup,
  signInAnonymously,
  signOut,
  createUserWithEmailAndPassword,
} from "firebase/auth";

// Auth state listener
onAuthStateChanged(auth, (user) => {
  if (user) {
    // Signed in
  } else {
    // Signed out
  }
});

// Update user profile
const updateUserProfile = async (newDisplayName, someImageUrl) => {
  await updateProfile(auth.currentUser, {
    displayName: newDisplayName,
    photoURL: someImageUrl,
  })
    .then(() => {
      // Success!
    })
    .catch((err) => {
      console.log(err.code);
      console.log(err.message);
    });
};

// Send user verification email
const verifyUserEmail = async () => {
  await sendEmailVerification(auth.currentUser).then(() => {
    // Sent!
  });
};

// Set a users email
const updateUserEmail = async (email) => {
  await updateEmail(auth.currentUser, email).then(() => {
    // Updated!
  });
};

// Set a users password
const updateUserPassword = async (newPassword) => {
  await updatePassword(auth.currentUser, newPassword).then(() => {
    // Updated!
  });
};

// Delete a user
const userDelete = async () => {
  await deleteUser(auth.currentUser).then(() => {
    // Deleted!
  });
};

// Send a password reset email
const resetPassword = async (email) => {
  await sendPasswordResetEmail(auth, email).then(() => {
    // Sent!
  });
};

// Get a user ID token
const getUserToken = async () => {
  await getIdToken(auth.currentUser).then(() => {
    // Success
  });
};

// Set language code
const setLanguage = async (languageCode) => {
  auth.languageCode = languageCode; // "it", "en", etc...
};

// Sign in with Email and password
const emailSignIn = async (email, password) => {
  await signInWithEmailAndPassword(auth, email, password).then(() => {
    // Signed in!
  });
};

// Providers
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();
const appleProvider = new OAuthProvider("apple.com");
const twitterProvider = new TwitterAuthProvider();
const githubProvider = new GithubAuthProvider();
const microsoftProvider = new OAuthProvider("microsoft.com");
const yahooProvider = new OAuthProvider("yahoo.com");

// Sign in with a provider
const providerSignIn = async (someProvider) => {
  await signInWithPopup(auth, someProvider).then(() => {
    // Signed in!
  });
};

// Anonymous user sign in
const anonSignIn = async () => {
  await signInAnonymously(auth).then(() => {
    // Signed in!
  });
};

// Sign user out
const signOutUser = async () => {
  await signOut(auth);
};

// Create new email and password user
const createNewEmailAndPassUser = async (email, password) => {
  await createUserWithEmailAndPassword(auth, email, password).then(() => {
    // Signed in
  });
};

// Sign in user with a phone number
const phoneNumberSignIn = async (phoneNumber, appVerifier) => {
  await signInWithPhoneNumber(auth, phoneNumber, appVerifier).then((confirmationResult) => {
    // SMS sent. Prompt user to type the code from the message, then sign the
    // user in with confirmationResult.confirm(code).
    window.confirmationResult = confirmationResult;
    // ...
  });
};

// Sign in user with a magic email link
const sendMagicSignInLink = async (email, actionCodeSettings) => {
  await sendSignInLinkToEmail(auth, email, actionCodeSettings).then(() => {
    // Sent!
    window.localStorage.setItem("emailForSignIn", email);
  });
  //...
  // Confirm the link is a sign-in with email link:
  if (isSignInWithEmailLink(auth, window.location.href)) {
    let email = window.localStorage.getItem("emailForSignIn");
    if (!email) {
      email = window.prompt("Please provide your email for confirmation");
    }
    await signInWithEmailLink(auth, email, window.location.href).then(() => {
      window.localStorage.removeItem("emailForSignIn");
    });
  }
};
