import React from 'react'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default function AuthContext() {

    const signup = (auth, email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    return (
        <div>

        </div>
    )
}
