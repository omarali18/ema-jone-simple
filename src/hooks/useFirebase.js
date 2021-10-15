import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase-init";

initializeAuthentication()

const googleProvider = new GoogleAuthProvider();

const useFirebase = () => {
    const [loginUser, setLoginUser] = useState({})
    const [error, setError] = useState("")

    const auth = getAuth()

    // login handler function
    const handleGoogleSignIn = () => {
        return signInWithPopup(auth, googleProvider)
        // .then(result => {
        //     console.log(result.user);
        //     // setLoginUser(result.user);
        // })
        // .catch(error => {
        //     setError(error.message)
        // })
    }

    // logOut handler function
    const logOut = () => {
        signOut(auth)
            .then(() => {
                setLoginUser({})
            })
            .catch(error => {
                setError(error.message)
            })
    }

    // observe whether user state changed or not
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setLoginUser(user)
            }
        })

    }, [])


    return {
        loginUser,
        error,
        handleGoogleSignIn,
        logOut
    }
}
export default useFirebase;