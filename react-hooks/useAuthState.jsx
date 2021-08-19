import { useEffect, useMemo } from "react";
import { onAuthStateChanged } from "firebase/auth";
import useLoadingValue from "./useLoadingValue";

const useAuthState = (auth) => {
  const user = auth.currentUser;
  const { error, loading, value, setError, setValue } = useLoadingValue(() => user);
  const results = [value, loading, error];

  useEffect(() => {
    const listener = onAuthStateChanged(auth, setValue, setError);

    return () => {
      listener();
    };
  }, [auth]);

  return useMemo(() => results, [value, loading, error]);
};

export default useAuthState;
