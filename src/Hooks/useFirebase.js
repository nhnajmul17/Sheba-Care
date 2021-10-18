import initializeAuthentication from "../Pages/Login/Firebase/firebase.init"
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useState } from "react";


initializeAuthentication();
const useFirebase = () => {

    const [user, setUser] = useState({})

    const auth = getAuth();
    const googleSignIn = () => {
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user)
            })
    }

    return { user, googleSignIn }

}

export default useFirebase;