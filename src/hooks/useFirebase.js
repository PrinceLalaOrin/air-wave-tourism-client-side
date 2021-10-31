import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";
import initAuth from "../pages/Login/Firebase/firebase.init";

initAuth();
const useFirebase = () =>  {
    const [client, setClient] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = () => {
        //   setIsLoading(true)
        return signInWithPopup(auth, googleProvider);
     
    }
    // observe client state change
    useEffect( () => {
      const unsubscribed=  onAuthStateChanged(auth, user => {
            if(user){
                setClient(user);
            }
            else{
                setClient({})
            }
           setIsLoading(false);
        });
        return () => unsubscribed;
    }, [])

    const logOut = () => {
       setIsLoading(true);
        signOut(auth)
        .then( () => {})
        .finally(() => setIsLoading(false));
        
    } 

    return {
        client,
        isLoading,
        setIsLoading,
        signInUsingGoogle,
        logOut
    }
}

export default useFirebase;