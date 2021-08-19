/*===================================================================//
   VERSION 8 (current)
//===================================================================*/
import firebase, { database } from "./init-firebase";

// Write data
const writeData = async (data) => {
  const { someUsername, someImageUrl } = data;
  await database
    .ref("users/" + userId)
    .set({
      username: someUsername,
      imageUrl: someImageUrl,
    })
    .then(() => {
      // Success
    });
};

// Read data
const userImageRef = database.ref("users/" + userId + "/imageUrl");
const readData = () => {
  userImageRef.on("value", (snapshot) => {
    const data = snapshot.val();
    return data;
  });
};

// Read data once
const dbRef = database.ref();
const readDataOnce = async () => {
  await dbRef
    .child("users")
    .child(userId)
    .get()
    .then((snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        console.log(data);
      }
    });
};

/*===================================================================//
   VERSION 9 (beta)
//===================================================================*/
import { database } from "./init-firebase";
import { ref, set, onValue, child } from "firebase/database";

// Write data
const writeData = async (data) => {
  const { someUsername, someImageUrl } = data;
  await set(ref(database, "users/" + userId), {
    username: someUsername,
    imageUrl: someImageUrl,
  }).then(() => {
    // Success
  });
};

// Read data
const userImageRef = database.ref("users/" + userId + "/imageUrl");
const readData = () => {
  onValue(userImageRef, (snapshot) => {
    const data = snapshot.val();
    return data;
  });
};

// Read data once
const dbRef = ref(database);
const readDataOnce = async () => {
  await get(child(dbRef, `users/${userId}`)).then((snapshot) => {
    if (snapshot.exists()) {
      const data = snapshot.val();
      console.log(data);
    }
  });
};
