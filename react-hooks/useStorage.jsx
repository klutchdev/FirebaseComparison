import { useEffect, useState } from "react";
import { storage, auth } from "../init-firebase";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import useAuthState from "./useAuthState";

const useFirebaseStorage = (file, path) => {
  const [user] = useAuthState(auth);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState("");
  const [url, setURL] = useState("");

  const uploadFile = async () => {
    const extension = file.type.split("/")[1];
    const storageRef = ref(storage, `${path}/${user.uid}.${extension}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snap) => {
        let pct = Math.floor((snap.bytesTransferred / snap.totalBytes) * 100);
        setProgress(pct);
      },
      (error) => {
        setError(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => setURL(downloadURL));
      }
    );
  };

  useEffect(() => {
    uploadFile(file);
    return () => {
      uploadFile();
    };
  }, [file]);

  return { progress, error, url };
};

export default useFirebaseStorage;
