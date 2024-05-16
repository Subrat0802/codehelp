import React, { useRef, useState } from "react";
import { checkValidateData } from "../utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [toggelLoginSignup, setToggleLoginSignup] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const navigate = useNavigate();

  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    //validate the form data
    const msg = checkValidateData(email.current.value, password.current.value);
    setErrorMsg(msg);

    if (msg) return;

    //sign in sign up logic
    if (!toggelLoginSignup) {
      //sign up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);
          navigate("/")

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorCode + "-" + errorMessage);
          // ..
        });
    } else {
      //sign in logic
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log("login", user)
          navigate("/")
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorCode + errorMessage) 
        });
    }
  };
  const handleFormData = (e) => {
    e.preventDefault();
  };

  return (
    <div className="bg-yellow-200 text-center flex flex-col justify-center items-center min-h-[100vh] border">
      <h1>{toggelLoginSignup ? "Login" : "Signup"}</h1>
      <form
        onSubmit={handleFormData}
        className="flex flex-col  bg-[#302f2f] px-10 py-20 text-white"
      >
        {!toggelLoginSignup && (
          <>
            <label>Name</label>
            <input
              type="text"
              placeholder="name"
              className="border border-gray-500 text-black"
            />
          </>
        )}
        <label>Email</label>
        <input
          ref={email}
          type="text"
          placeholder="Email"
          className="border border-gray-500 text-black"
        />
        <label>Password</label>
        <input
          ref={password}
          type="password"
          placeholder="password"
          className="border border-gray-500 text-black"
        />
        <input
          onClick={handleButtonClick}
          className="bg-black px-2 py-2 rounded mt-2"
          type="submit"
        />
        <p
          className="cursor-pointer"
          onClick={() => setToggleLoginSignup(!toggelLoginSignup)}
        >
          {toggelLoginSignup ? "Dont have account?" : "already registered?"}
        </p>
        <p>
          {errorMsg === "" ? "" : <h1 className="text-red-800">{errorMsg}</h1>}{" "}
        </p>
      </form>
    </div>
  );
};

export default Login;
