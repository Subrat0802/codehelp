import React, { useRef, useState } from "react";
import Header from "./Header";
import { CheckValidateData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { Avatar_Img, BG_URL } from "../utils/constants";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null); 

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = (e) => {
    e.preventDefault();
    const message = CheckValidateData(
      email.current.value,
      password.current.value,
      // name.current.value
    );

    setErrorMessage(message);

    //firbase authentication
    if (message) return;

    //sign in sign up logic
    if (isSignInForm) {
      //sign up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: `${Avatar_Img + name.current.value}`,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode);
          navigate("/");
        });
    } else {
      //sign in logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
      .then((userCredential) => {
        const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode);
          navigate("/");
    
        });
    }
  };

  return (
    <div className="">
      <Header />
      <div className="absolute ">
        <img
          className=""
          src={BG_URL}
        />
      </div>
      <form className=" py-16 mt-48 p-12 absolute bg-opacity-85 rounded-md  text-white bg-black  w-3/12 mx-auto my-28 right-0 left-0">
        <h1 className="font-bold text-3xl py-4 ">
          {isSignInForm ? "Sign Up" : "Sign In"}
        </h1>
        {isSignInForm && (
          <div>
            <input
              ref={name}
              type="text"
              placeholder="Full Name "
              className="p-2 my-2 w-full text-black bg-gray-700"
            />
          </div>
        )}

        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-2 my-2 w-full text-black bg-gray-700 "
        />
        <input
          ref={password}
          type="password"
          placeholder="Email Address"
          className="p-2 my-2 w-full text-black bg-gray-700 border-hidden"
        />
        <p className="text-red-700">{errorMessage}</p>
        <button
          className=" my-2 py-4 bg-red-700 w-full"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign Up" : "Sign In"}
        </button>
        <p onClick={toggleSignInForm} className="cursor-pointer group ">
          {isSignInForm ? "Already have an account?" : "New to Netflix?"}{" "}
          <span className="group-hover:text-red-700 transition-all duration-200">
            {isSignInForm ? "Sign In Now" : "Sign Up Now"}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
