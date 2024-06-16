import React, { useState } from "react";
import { useAuth } from "../store/auth";

const Contact = () => {
  const [contact, setContact] = useState({
    username: "",
    email: "",
    message: "",
  });

  const [userData, setUserData] = useState(true)
  const {user} = useAuth();
  if(user && userData){
    setContact({
      username:user.username,
      email:user.email,
      message:""
    })

    setUserData(false)
  }

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setContact({
      ...contact,
      [name]: value,
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    
    try{
      const response = await fetch("http://localhost:3000/api/form/contact", {
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify(contact)
      })

      if(response.ok){
        setContact({
          message: "",
        })
        const data = await response.json();
        console.log(data);
        alert("Message sent successfully");
      }
    }catch(err){
      console.log(err);
    }

  };

  return (
    <div className="flex flex-col justify-center items-center h-full mt-10">
      <div className=" w-10/12 flex min-h-[70%]">
        <div className=" w-[50%] ">
          <h1 className="text-3xl">Contact us</h1>
        </div>
        <div className="w-[50%]  ">
          <form onSubmit={handleFormSubmit}>
            <div className="flex flex-col w-[70%] mb-4">
              <label className="text-white" htmlFor="username">
                username
              </label>
              <input
                className="py-2 rounded-md"
                name="username"
                id="username"
                type="text"
                placeholder="username"
                required
                autoComplete="off"
                value={contact.username}
                onChange={handleInput}
              />
            </div>
            <div className="flex flex-col w-[70%] mb-4">
              <label className="text-white" htmlFor="email">
                email
              </label>
              <input
                className="py-2 rounded-md"
                name="email"
                id="email"
                type="text"
                placeholder="email"
                required
                autoComplete="off"
                value={contact.email}
                onChange={handleInput}
              />
            </div>
            <div className="flex flex-col w-[70%] mb-4">
              <label className="text-white" htmlFor="message">
                message
              </label>
              <textarea
                className="py-2 rounded-md"
                name="message"
                cols="30"
                rows="10"
                id="message"
                type="text"
                placeholder="message"
                required
                autoComplete="off"
                value={contact.message}
                onChange={handleInput}
              />
            </div>
            <div className="flex flex-col w-[70%] mb-4">
              <input
                className="py-2 rounded-md bg-blue-400 cursor-pointer hover:bg-blue-500"
                type="submit"
              />
            </div>
          </form>
        </div>
      </div>
      <div className="w-full">
        <iframe className="w-full h-64"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d916.5512358496499!2d77.43882005117091!3d23.235628149536037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c431d807cdfc9%3A0xaebb1cc768943804!2sHome!5e0!3m2!1sen!2sin!4v1716155468918!5m2!1sen!2sin"
          allowfullscreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
