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
const addDocOption1 = async () => {
  await collectionRef.doc("some-doc-name").set({
    contents: "some-data",
  });
};
// Add a document to a collection | Option #2
const addDocOption2 = async () => {
  await documentRef.set({
    contents: "some-data",
  });
};

// Add a document to a collection (with an auto assigned doc ID) | Option #1
const addDocWithAutoIdOption1 = async () => {
  await collectionRef.add({
    contents: "some-data",
  });
};

// Add a document to a collection (with an auto assigned doc ID) | Option #2
const addDocWithAutoIdOption2 = async () => {
  await collectionRef.set({
    contents: "some-data",
  });
};

// Merging a document if it exists
const mergeExisitngDoc = async () => {
  await documentRef.set(
    {
      contents: "some-data",
    },
    { merge: true }
  );
};

// Deleting a document
const deleteDoc = async () => {
  await documentRef.delete();
};

// Using a server timestamp
const timestamp = fieldVal.serverTimestamp();
const useTimestamp = async () => {
  await documentRef.set({
    createdAt: timestamp,
  });
};

// Add/update elements in an array
const arrayAdd = fieldVal.arrayUnion();
const updateAnArray = async () => {
  await documentRef.update({
    recentUpdates: arrayAdd("8/17/2021"),
  });
};
// Remove elements in an array
const arrayRemove = fieldVal.arrayRemove();
const RemoveArrayItem = async () => {
  await documentRef.update({
    recentUpdates: arrayRemove("7/04/2021"),
  });
};

// Increment/decrement a numeric value/counter
const increment = fieldVal.increment();
const incrementCounter = async () => {
  await documentRef.update({
    increasingValue: increment(33),
    decreasingValue: increment(-13),
  });
};

// Get a new batch
const batch = firestore.batch();

// Set a batch value
batch.set(documentRef, { contents: "some-data" });

// Batch update
batch.update(documentRef, { contents: "some-updated-data" });

// Batch delete
batch.delete(documentRef);

// Commit the batch
const commitBatch = async () => {
  await batch.commit().then(() => {
    // Batch actions successful
  });
};

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
  deleteDoc,
  serverTimestamp,
  arrayUnion,
  arrayRemove,
  increment,
  writeBatch,
} from "firebase/firestore";

// Collection/doc ref
const collectionRef = collection(firestore, "some-collection");
const documentRef = doc(firestore, "some-collection", "some-doc-name");

// Add a document to a collection | Option #1
const addDocOption1 = async () => {
  await setDoc(collectionRef, "some-doc-name", {
    contents: "some-data",
  });
};

// Add a document to a collection | Option #2
const addDocOption2 = async () => {
  await setDoc(documentRef, {
    contents: "some-data",
  });
};

// Add a document to a collection (with an auto assigned doc ID) | Option #1
const addDocWithAutoIdOption1 = async () => {
  await addDoc(collectionRef, {
    contents: "some-data",
  });
};

// Add a document to a collection (with an auto assigned doc ID) | Option #2
const addDocWithAutoIdOption2 = async () => {
  await setDoc(collectionRef, {
    contents: "some-data",
  });
};

// Merging a document if it exists
const mergeExisitngDoc = async () => {
  await setDoc(
    documentRef,
    {
      contents: "some-data",
    },
    { merge: true }
  );
};

// Deleting a document
const deleteDoc = async () => {
  await deleteDoc(documentRef);
};

// Using a server timestamp
const timestamp = serverTimestamp();
const useTimestamp = async () => {
  await setDoc(collectionRef, {
    createdAt: timestamp,
  });
};

// Add/update elements in an array
const updateAnArray = async () => {
  await updateDoc(documentRef, {
    recentUpdates: arrayUnion("8/17/2021"),
  });
};

// Remove elements in an array
const RemoveArrayItem = async () => {
  await updateDoc(documentRef, {
    recentUpdates: arrayRemove("7/04/2021"),
  });
};

// Increment/decrement a numeric value/counter
const incrementCounter = async () => {
  await updateDoc(documentRef, {
    increasingValue: increment(33),
    decreasingValue: increment(-13),
  });
};

// Get a new batch
const batch = writeBatch(firestore);

// Set a batch value
batch.set(documentRef, { contents: "some-data" });

// Batch update
batch.update(documentRef, { contents: "some-updated-data" });

// Batch delete
batch.delete(documentRef);

// Commit the batch
const commitBatch = async () => {
  await batch.commit().then(() => {
    // Batch actions successful
  });
};

//====================================================================//
