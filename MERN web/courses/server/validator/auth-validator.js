const { z } = require("zod");

//creating an object schema

const loginSchema = z.object({
  email: z
    .string({ required_error: "email is required" })
    .trim()
    .min(8, { message: "email must be atleast 8 charecter" })
    .max(40, { message: "email must be less than 255 charecter" }),
  password: z
    .string({ required_error: "password is required" })
    .trim()
    .min(6, { message: "password must be atleast 6 charecter" })
    .max(20, { message: "email must be less than 20 charecter" }),
})

const signupSchema = loginSchema.extend({
  username: z
    .string({ required_error: "Name is required" })
    .trim()
    .min(3, { message: "Name must be atleast 3 charecter" })
    .max(255, { message: "Name must be less than 255 charecter" }),
  
  phone: z
    .string({ required_error: "phone number is required" })
    .trim()
    .min(10, { message: "phone number must be atleast 10 charecter" })
    .max(10, { message: "phone number must be less than 10 charecter" }),
  
});


module.exports = {signupSchema, loginSchema};