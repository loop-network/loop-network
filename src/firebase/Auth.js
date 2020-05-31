import React, { useEffect, useState } from "react";
import app, {db} from "./base.js";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [pending, setPending] = useState(true);
    // const [currentUsername, setCurrentUsername] = useState("");
  
    useEffect(() => {
      app.auth().onAuthStateChanged((user) => {
  
        setCurrentUser(user)
        setPending(false)
        console.log(user)
  
        const uid = user.uid;
        console.log(uid)
        var username = "";
    
        // db.collection("users")
        // .doc(uid)
        // .get()
        // .then(doc => {
        //     username = doc.data().username;
        //     console.log(username)
        //     setCurrentUsername(username);
        // console.log("username");
        // console.log(username)
  
    
        // });
  
        
        
      });
    }, []);
  
    if(pending){
      return <>Loading...</>
    }
  
    return (
      <AuthContext.Provider
        value={{
          currentUser
        }}
      >
        {children}
      </AuthContext.Provider>
    );
  };