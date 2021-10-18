import initializeAuthentication from "../Pages/Login/Firebase/firebase.init"
import { getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";


initializeAuthentication();
const useFirebase = () => {

    const auth = getAuth();

    const [user, setUser] = useState({})
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const [error, setError] = useState('')

    const handleEmail = e => {
        setEmail(e.target.value)
    }

    const handlePassword = e => {
        setPassword(e.target.value)
    }

    const handleRegister = e => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result.user)
                setError('')
            })
            .catch(error => {
                setError(error.message)
            })

    }

    const handleLogin = e => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result.user)
                setError('')
            })
            .catch(error => {
                setError(error.message)
            })

    }

    const logOut = () => {
        signOut(auth)
            .then(() => { })
    }




    const googleSignIn = () => {
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user)
            })
            .catch(error => {
                setError(error.message)
            })
    }


    const githubSignIn = () => {
        const githubProvider = new GithubAuthProvider();
        signInWithPopup(auth, githubProvider)
            .then(result => {
                setUser(result.user)
            })
            .catch(error => {
                setError(error.message)
            })
    }
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);

            }
            else {
                setUser({})
            }

        });
    }, [])

    return { user, error, handleEmail, handlePassword, handleRegister, handleLogin, logOut, googleSignIn, githubSignIn }

}

export default useFirebase;