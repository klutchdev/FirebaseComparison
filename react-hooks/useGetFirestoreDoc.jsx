import { useEffect, useState } from "react";
import { firestore } from "../init-firebase";
import { doc, getDoc } from "firebase/firestore";

// Example doc refs
// const docRef = doc(firestore, "some-collection", "some-docId");
// const docRef = doc(firestore, "some-collection/some-docId");

const useGetFirestoreDoc = (docRef) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const docSnap = await getDoc(docRef);

  const getDocData = async () => {
    if (docSnap.exists()) {
      const data = doc.data();
      setData(data);
    } else {
      setError("Document does not exist");
    }
  };

  useEffect(() => {
    getDocData().catch((err) => {
      setError(err);
    });
    return () => {
      getDocData();
    };
  }, [docRef]);

  return { data, error };
};

export default useGetFirestoreDoc;
