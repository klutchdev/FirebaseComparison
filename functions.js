/*===================================================================//
   VERSION 8 (current)
//===================================================================*/
import { functions } from "./init-firebase";

// Call a function
const addData = functions.httpsCallable("addData");
const callAddDataFunction = async () => {
  await addData({ data: "some-data" })
    .then((result) => {
      const data = result.data;
      return data;
    })
    .catch((error) => {
      const { code, message, details } = error;
      console.log(code);
      console.log(message);
      console.log(details);
    });
};

/*===================================================================//
   VERSION 9 (beta)
//===================================================================*/
import { functions } from "./init-firebase";
import { httpsCallable } from "firebase/functions";

// Call a function
const addData = httpsCallable(functions, "addData");
const callAddDataFunction = async () => {
  await addData({ data: "some-data" })
    .then((result) => {
      const data = result.data;
      return data;
    })
    .catch((error) => {
      const { code, message, details } = error;
      console.log(code);
      console.log(message);
      console.log(details);
    });
};
