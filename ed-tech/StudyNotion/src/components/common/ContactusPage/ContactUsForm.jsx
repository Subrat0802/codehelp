import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { apiConnector } from "../../../services/apiconnector";
import { contactusEndpoint } from "../../../services/apis";
import CountryCode from "../../../data/countrycode.json"

const ContactUsForm = () => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({
        email: "",
        firstName: "",
        lastName: "",
        message: "",
        phoneNo: "",
      });
    }
  }, [isSubmitSuccessful, reset]);

  const submitContactForm = async (data) => {
    console.log("Logging Data", data)
    try{
        setLoading(true);
        // const response = await apiConnector("POST", contactusEndpoint.CONTACT_US_API, data)
        const response = {status:"OK"}
        console.log("loggin res", response);
        setLoading(false)
    }catch(error){
        console.log("err:", error)
        setLoading(false)
    }
  };

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <form className="mb-28 w-[30%] " onSubmit={handleSubmit(submitContactForm)}>
        <div className="">
          {/* firstName  */}
            <div className="flex flex-col">
                <label htmlFor="firstName">First Name:</label>
                <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    placeholder="Enter first name"
                    {...register("firstName", {required:true})}
                />
                {
                    errors.firstName && (
                        <span>
                            Please enter your first name
                        </span>
                    )
                }
            </div>

            {/* lastName  */}
            <div className="flex flex-col">
                <label htmlFor="lastName">Last Name:</label>
                <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    placeholder="Enter last name"
                    {...register("lastName")}
                />
            </div>

            {/* email  */}
            <div className="flex flex-col">
                <label htmlFor="email">Email:</label>
                <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="Enter Email"
                    {...register("email", {required:true})}
                />
                {
                    errors.email && (
                        <span>
                            Please enter your email address
                        </span>
                    )
                }
            </div>
            
            {/* phone number  */}
            <div className="flex flex-col gap-2 ">
                <label htmlFor="phonenumber">Phone Number</label>
                <div className="flex flex-col gap-5">
                    {/* dorpdown  */}
                    <div className="text-black gap-3 w-[80px]">
                        <select name="dropdown" id="dropdown" {...register("countrycode", {required:true})}>
                            {
                                CountryCode.map((el, i) => {
                                    return (
                                        <option key={i} value={el.code} className="text-black">
                                            {el.code} - {el.country}
                                        </option>
                                    )
                                })
                            }
                        </select>
                    </div>

                    <div>
                        <input 
                            type="number"
                            name="phonenumber"
                            id="phonenumber"
                            placeholder="12344-56786"
                            className="text-black"
                            {...register("phoneNo", 
                                {
                                    required:{value:true, message:"Please eneter phone number"}, 
                                    maxLength:{value:10, message:"Invalid phone number, Max length 10"},
                                    minLength:{value:8, message:"Invalid phone number, min length 10"}
                                })}
                        />
                    </div>
                </div>
                {
                    errors.phoneNo && (
                        <span>Phone number is required, {errors.phoneNo.message}</span>
                    )
                }
            </div>

            {/* message  */}
            <div className="flex flex-col">
                <label htmlFor="message">Message:</label>
                <textarea
                    name="message"
                    id="message"
                    cols="30"
                    rows="7"
                    placeholder="Enter Your Message"
                    {...register("message", {required:true})}
                />
                {
                    errors.message && (
                        <span>
                            Please enter your message
                        </span>
                    )
                }
            </div>

        </div>
        <button className="bg-yellow-100 rounded-xl p-3 text-black font-bold mt-2" type="submit">Send message</button>
      </form>
    </div>
  );
};

export default ContactUsForm;
