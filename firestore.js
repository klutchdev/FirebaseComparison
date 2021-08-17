/*===================================================================//
   VERSION 8 (current)
//===================================================================*/
import firebase, { firestore } from "./init-firebase";

// Collection/doc ref
const collectionRef = firestore.collection("some-collection");
const documentRef = firestore.doc("some-collection/some-doc-name");

// Firestore field values
const fieldVal = firebase.firestore.FieldValue;

// Add a document to a collection | Option #1
await collectionRef.doc("some-doc-name").set({
  contents: "some-data",
});
// Add a document to a collection | Option #2
await documentRef.set({
  contents: "some-data",
});

// Add a document to a collection (with an auto assigned doc ID) | Option #1
await collectionRef.add({
  contents: "some-data",
});

// Add a document to a collection (with an auto assigned doc ID) | Option #2
await collectionRef.set({
  contents: "some-data",
});

// Merging a document if it exists
await documentRef.set(
  {
    contents: "some-data",
  },
  { merge: true }
);

// Using a server timestamp
const timestamp = fieldVal.serverTimestamp();
await documentRef.set({
  createdAt: timestamp,
});

// Add/update elements in an array
const arrayAdd = fieldVal.arrayUnion();
await documentRef.update({
  recentUpdates: arrayAdd("8/17/2021"),
});
// Remove elements in an array
const arrayRemove = fieldVal.arrayRemove();
await documentRef.update({
  recentUpdates: arrayRemove("7/04/2021"),
});

// Increment/decrement a numeric value/counter
const increment = fieldVal.increment();
await documentRef.update({
  increasingValue: increment(33),
  decreasingValue: increment(-13),
});

/*===================================================================//
   VERSION 9 (beta)
//===================================================================*/
import { firestore } from "./init-firebase";
import {
  doc,
  addDoc,
  setDoc,
  updateDoc,
  collection,
  serverTimestamp,
  arrayUnion,
  arrayRemove,
  increment,
} from "firebase/firestore";

// Collection/doc ref
const collectionRef = collection(firestore, "some-collection");
const documentRef = doc(firestore, "some-collection", "some-doc-name");

// Add a document to a collection | Option #1
await setDoc(collectionRef, "some-doc-name", {
  contents: "some-data",
});
// Add a document to a collection | Option #2
await setDoc(documentRef, {
  contents: "some-data",
});

// Add a document to a collection (with an auto assigned doc ID) | Option #1
await addDoc(collectionRef, {
  contents: "some-data",
});

// Add a document to a collection (with an auto assigned doc ID) | Option #2
await setDoc(collectionRef, {
  contents: "some-data",
});

// Merging a document if it exists
await setDoc(
  documentRef,
  {
    contents: "some-data",
  },
  { merge: true }
);

// Using a server timestamp
const timestamp = serverTimestamp();
await setDoc(collectionRef, {
  createdAt: timestamp,
});

// Add/update elements in an array
await updateDoc(documentRef, {
  recentUpdates: arrayUnion("8/17/2021"),
});
// Remove elements in an array
await updateDoc(documentRef, {
  recentUpdates: arrayRemove("7/04/2021"),
});

// Increment/decrement a numeric value/counter
await updateDoc(documentRef, {
  increasingValue: increment(33),
  decreasingValue: increment(-13),
});
//====================================================================//
