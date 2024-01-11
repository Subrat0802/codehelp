//sendOtp
const User = require("../models/User");
const OTP = require("../models/OTP");
const otpGenerator = require("otp-generator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.sendOTP = async (req, res) => {
  try {
    //fetch email from req body
    const { email } = req.body;

    //check user is already exist
    const checkUserPresent = await User.finOne({ email });

    //if user already exis, then return a response
    if (checkUserPresent) {
      return res.status(401).json({
        success: false,
        message: "User already registered",
      });
    }

    //generate otp
    var otp = otpGenerator.generate(6, {
      uspperCaseAlphabets: false,
      lowerCaseAlphabets: false,
      specialChars: false,
    });
    console.log("OTP generated: ", otp);

    //check unique otp or not
    let result = await OTP.findOne({ otp: otp });

    while (result) {
      otp = otpGenerator(6, {
        uspperCaseAlphabets: false,
        lowerCaseAlphabets: false,
        specialChars: false,
      });
      const result = await OTP.findOne({ otp: otp });
    }

    const otpPayload = { email, otp };

    //create ana entery in db for OTP
    const otpBody = await OTP.create(otpPayload);
    console.log(otpBody);

    // return response successful
    res.status(200),
      json({
        success: true,
        message: "Otp sent successfully",
        otp,
      });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

//signup
exports.signUp = async (req, res) => {
  try {
    //data fetch from req body
    const {
      firstName,
      lastName,
      email,
      password,
      conPassword,
      accountType,
      contachNumber,
      otp,
    } = req.body;

    //validate data
    if (
      !firstName ||
      !lastName ||
      !email ||
      !password ||
      !conPassword ||
      !otp
    ) {
    }

    //matach both pass pass, conPass
    if (password !== conPassword) {
      return res.status(400).json({
        success: false,
        message:
          "Password and confirm password value does not match, Please try again latter",
      });
    }

    //check user already exist or not
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User is already registered",
      });
    }

    //find most recent OTP stored for the user
    const recentOtp = await OTP.find({ email })
      .sort({ createdAt: -1 })
      .limit(-1);
    console.log(recentOtp);

    //validate OTP
    if (recentOtp.length == 0) {
      //otp not found
      return res.status(400).json({
        success: false,
        message: "OTP not found",
      });
    } else if (otp !== recentOtp.otp) {
      //Invalid OTP
      return res.status(400).json({
        success: false,
        message: "Invalid, Wrong Otp",
      });
    }

    //hash pass
    const hashedPassword = await bcrypt.hash(password, 10);

    //enetery create in DB

    const profileDetails = await Profile.create({
      gender: null,
      dateOfBirth: null,
      about: null,
      constactNumber: null,
    });

    const user = await User.create({
      firstName,
      lastName,
      email,
      contachNumber,
      password: hashedPassword,
      accountType,
      additionalDetails: profileDetails._id,
      image: `https://api.dicebear.com/5.x/initials/svg?seed=${firstName} ${lastName}`,
    });

    //retur res
    return res.status(200).json({
      success: true,
      message: "User is registered successully",
      user,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "User is not registered please try again later",
    });
  }
};

//login

exports.login = async (req, res) => {
  try {
    //get Data from req body
    const { email, password } = req.body;

    //validation of data
    if (!email || !password) {
      return res.status(403).json({
        success: false,
        message: "All fiels are required please try again",
      });
    }

    //user check exist or not
    const user = await User.findOne({ email }).populate("additionalDetails");
    if (!user) {
      return res.status(401).json({
        success: false,
        message: "User is not registered, Please signup first ",
      });
    }

    //generate JWT, after password matching
    if (bcrypt.compare(password, user.password)) {
      const payload = {
        email: user.email,
        is: user._id,
        accountType: user.accountType,
      };
      const token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: "2h",
      });
      user.token = token;
      user.password = undefined;

      //create cookie and send response
      const options = {
        expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
        httpOnly:true
      };
      res.cookie("token", token, options).status(200).json({
        success: true,
        token,
        user,
        message: "Logged In successfully",
      });
    }
    else{
        return res.status(401).json({
            success:false,
            message:"Password is incorrect"
        })
    }
  } catch (error) {
    cosnole.log(error);
    return res.status(500).json({
        success:false,
        message:"Login Failed Please Try Again"
    })
  }
};

//change password
exports.changePassword = async (req, res) => {
    //get data from req body
    //get oldPassword, newPassword, conNewPassword
    //validation

    //update password in DB
    //send mail =  password updated
    //reyurn response
}