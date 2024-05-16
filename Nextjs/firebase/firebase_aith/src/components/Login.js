import React, { useEffect, useState } from "react";
import { auth } from "../firebase-config";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null)

  const loginAccount = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredentials) => {
        const loggedInUser = userCredentials.user;
        setUser(loggedInUser);

    }).catch((error) => {
        console.log("Error",error);
    })

  }

  const logout = () => {
    signOut(auth)
    .then(() => {
        setUser(null);
        console.log("Sign out")
    }).catch((error) => {
        console.log(error);
    })
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
        if(user){
            setUser(user);
        }else{
            setUser(null);
        }
    })
    return () => unsubscribe();
  }, []);

  return (
    <div>
      <form onSubmit={loginAccount}>
        <h1>Login Page</h1>
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" >Login</button>
      </form>

        {
            user && <div>
                <p>Welcome , {user.email} </p>
                <button onClick={logout}>logout</button>
            </div>
        }
      
    </div>
  );
};

export default Login;
