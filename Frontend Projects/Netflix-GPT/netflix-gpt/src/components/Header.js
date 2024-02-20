import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";


const Header = () => {
  const navigate = useNavigate();
  const user = useSelector(state => state.user)
  const dispatch = useDispatch()
  const showLang = useSelector(store => store.gpt.showGptSearch)

  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
      navigate("/error");
    });
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        //sign in eneter in account
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        //signout
        dispatch(removeUser());
        navigate("/")
      }
    });

    //unsubscribe when component unmount
    return () => unsubscribe();
  }, []);

  const handleGptSearchClick =() => {
    //toggle gpt search
    dispatch(toggleGptSearchView());
  }


  const handleLanguageChange  = (e) => {
    dispatch(changeLanguage(e.target.value));
  }



  return (
    <div className="absolute text-white px-8 py-2 bg-gradient-to-b from-black z-10 w-full flex justify-between items-center">
      <img
        className="w-48"
        src={LOGO}
      />
      {
        user && <div className="flex justify-center gap-8 items-center">
          {
            showLang && <select className="text-black" onChange={handleLanguageChange}>
            {
              SUPPORTED_LANGUAGES.map((lang) => {
                return <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>
              })
            }
          </select>
          }
          
        <button onClick={handleSignOut}>Sign Out</button>
        <button onClick={handleGptSearchClick}>{showLang ? "Home" : "GPT Search"}</button>
        
        <img className="w-9 mr-3 rounded-md"
          src={user?.photoURL}
          alt="userIcon"
        />
        
      </div>
      }
      
    </div>
  );
};

export default Header;
