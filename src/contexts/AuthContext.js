import React, { createContext,useContext, useState, useEffect } from 'react'
import { auth } from '../firebase';
import { 
    onAuthStateChanged,
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword,
    signOut
 } from "firebase/auth";

const AuthContext = createContext()

export const useAuth = () => {
    return useContext(AuthContext);
}

export default function AuthProvide({children}) {
    const [loading, setLoading] = useState(true);
    const [currentUser, setCurrentUser] = useState('')
    const auths = auth;

    function signup(email, password){
        return createUserWithEmailAndPassword(auths, email, password)
    }

    const login = (email,password) => {
        return signInWithEmailAndPassword(auths,email,password);
    }

    const logout = () => {
        return signOut(auths);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auths, user => {
          setCurrentUser(user)
          setLoading(false)
        })
    
        return unsubscribe
      })
    
    const value = {
        signup,
        login,
        logout,
        currentUser,
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}
