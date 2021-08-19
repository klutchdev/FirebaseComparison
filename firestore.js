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

// Get/read a document once
const getDocData = async (docRef) => {
  await docRef.get().then((doc) => {
    if (doc.exists) {
      console.log("Document data:", doc.data());
    }
  });
};

// Get/read documents in a collection once
const getCollectionDocs = async (collectionRef) => {
  await collectionRef.get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      console.log(data);
    });
  });
};

// Listen for document changes
const docListener = (docRef) => {
  docRef.onSnapshot((doc) => {
    const data = doc.data();
    console.log(data);
  });
};
const unsubscribe = docListener(); // Detach listener
unsubscribe(); // Destroy

// Listen for collection changes
const collectionListener = (collectionRef) => {
  collectionRef.onSnapshot((querySnapshot) => {
    let dataArray = [];
    querySnapshot.forEach((doc) => {
      dataArray.push(doc.data());
    });
    dataArray.map((d) => console.log(d));
  });
};
const unsubscribe = collectionListener(); // Detach listener
unsubscribe(); // Destroy

// Queries
const collectionRef = firestore.collection("some-collection");
const someQuery = collectionRef.where("some-data", "==", "awesome");
const compoundQuery = collectionRef.where("some-value", ">=", 1).where("some-value", "<=", 10);
const arrayQuery = collectionRef.where("some-values", "array-contains", "some-array-value");
const collectionGroupQuery = collectionRef
  .collectionGroup("some-data")
  .where("type", "==", "super-awesome");
const orderQuery = collectionRef.orderBy("createdAt", "desc".limit(100));
const filterAndOrderQuery = collectionRef.where("some-value", ">", 5).orderBy("some-value");

// Use a query to get collection docs
const getCollectionDocs = async (collectionRef) => {
  const collectionRef = firestore.collection(collection);
  const collectionQuery = collectionRef.where("some-data", "==", true);

  await collectionQuery.get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      console.log(data);
    });
  });
};

// Use a query with collection listener
const collectionListener = (collectionRef) => {
  const collectionRef = firestore.collection(collection);
  const collectionQuery = collectionRef.where("some-data", "==", true);

  collectionQuery.onSnapshot((querySnapshot) => {
    let dataArray = [];
    querySnapshot.forEach((doc) => {
      dataArray.push(doc.data());
    });
    dataArray.map((d) => console.log(d));
  });
};

// Paginate a query
const first = collectionRef.orderBy("createdAt").limit(25);
return first.get().then((docSnaps) => {
  const lastVisible = docSnaps.docs[docSnaps.docs.length - 1];
  console.log("last", lastVisible);

  const next = collectionRef.orderBy("createdAt").startAfter(lastVisible).limit(25);
});

/*===================================================================//
   VERSION 9 (beta)
//===================================================================*/
import { firestore } from "./init-firebase";
import {
  doc,
  addDoc,
  setDoc,
  getDoc,
  updateDoc,
  collection,
  deleteDoc,
  serverTimestamp,
  arrayUnion,
  arrayRemove,
  increment,
  writeBatch,
  query,
  where,
  getDocs,
  onSnapshot,
  orderBy,
  limit,
  startAt,
  endAt,
  startAfter,
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

// Get/read a document once
const getDocData = async (collection, docId) => {
  const docRef = doc(firestore, collection, docId);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    console.log("Document data:", doc.data());
  }
};

// Get/read documents in a collection once
const getCollectionDocs = async (collection) => {
  const collectionRef = collection(firestore, collection);
  const querySnapshot = await getDocs(collectionRef);

  querySnapshot.forEach((doc) => {
    const data = doc.data();
    console.log(data);
  });
};

// Listen for document changes
const docListener = (collection, docId) => {
  const docRef = doc(firestore, collection, docId);
  onSnapshot(docRef, (doc) => {
    const data = doc.data();
    console.log(data);
  });
};
const unsubscribe = docListener(); // Detach listener
unsubscribe(); // Destroy

// Listen for collection changes
const collectionListener = (collection) => {
  const collectionRef = collection(firestore, collection);
  onSnapshot(collectionRef, (querySnapshot) => {
    let dataArray = [];
    querySnapshot.forEach((doc) => {
      dataArray.push(doc.data());
    });
    dataArray.map((d) => console.log(d));
  });
};
const unsubscribe = collectionListener(); // Detach listener
unsubscribe(); // Destroy

// Queries
const collectionRef = collection(firestore, "some-collection");
const someQuery = query(collectionRef, where("some-data", "==", "awesome"));
const compoundQuery = query(
  collectionRef,
  where("some-value", ">=", 1),
  where("some-value", "<=", 10)
);
const arrayQuery = query(collectionRef, where("some-values", "array-contains", "some-array-value"));
const orderQuery = query(collectionRef, orderBy("createdAt", "desc"), limit(100));
const filterAndOrderQuery = query(
  collectionRef,
  where("some-value", ">", 5),
  orderBy("some-value")
);
const paginateStart = query(collectionRef, orderBy("createdAt"), startAt(25));
const paginateEnd = query(collectionRef, orderBy("createdAt"), endAt(50));

// Use a query to get collection docs
const getCollectionDocs = async (collection) => {
  const collectionRef = collection(firestore, collection);
  const collectionQuery = query(collectionRef, where("some-data", "==", true));
  const querySnapshot = await getDocs(collectionQuery);

  querySnapshot.forEach((doc) => {
    const data = doc.data();
    console.log(data);
  });
};

// Use a query with collection listener
const collectionListener = (collection) => {
  const collectionRef = collection(firestore, collection);
  const collectionQuery = query(collectionRef, where("some-data", "==", true));

  onSnapshot(collectionQuery, (querySnapshot) => {
    let dataArray = [];
    querySnapshot.forEach((doc) => {
      dataArray.push(doc.data());
    });
    dataArray.map((d) => console.log(d));
  });
};

// Paginate a query
const first = query(collectionRef, orderBy("createdAt"), limit(25));
const docSnaps = await getDocs(first);
const lastVisible = docSnaps.docs[docSnaps.docs.length - 1];
console.log("last", lastVisible);

const next = query(collectionRef, orderBy("createdAt"), startAfter(lastVisible), limit(25));
