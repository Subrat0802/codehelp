const User = require("../models/User");
const mailSender = require("../utils/mailSender");
const bcrypt = require("bcrypt");

//resetpasswordtoken
exports.resestPasswordToken = async (req, res) => {
  try {
    //get mail from req body
    const email = req.body.email;

    //check user forthis email, mail validation
    const user = await User.findOne({ email: email });
    if (!user) {
      return res.json({
        success: false,
        message: "Your Email is not resgistered with us",
      });
    }

    //generate token
    const token = crypto.randomUUID();

    //update user by adding token and expiration time
    const updatedDetails = await User.findByIdAndUpdate(
      { email: email },
      {
        token: token,
        resetPasswordExpires: Date.now() + 5 * 60 * 1000,
      },
      { new: true }
    );

    //create url
    const url = `http://localhost:3000/update-password/${token}`;

    //send mail containing
    await mailSender(
      email,
      "password Reset Link",
      `password Reset Link: ${url}`
    );

    // return res
    return res.json({
      success: true,
      message: "Email sent successfully, please check email change passsword ",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Something went wrong while sending reset password mail",
    });
  }
};



//reset passowrd
exports.resetPassword = async (req, res) => {
  try {
    //data fetch
    const { password, confirmPassword, token } = req.body;

    //validation
    if (password !== confirmPassword) {
      return res.json({
        success: false,
        message: "Password not matching",
      });
    }
    //get User Details from db using token
    const userDetails = await User.findOne({ token: token });
    //if no enetry - Invalid token
    if (!userDetails) {
      return res.json({
        success: false,
        message: "Token id Invalid",
      });
    }

    //token time check
    if (userDetails.resetPasswordExpires < Date.now()) {
      return res.json({
        success: false,
        message: "Token is expire, please regenrate your token",
      });
    }

    //hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    //update the password
    await User.findOneAndUpdate(
      { token: token },
      { password: hashedPassword },
      { new: true }
    );

    //return response
    return res.status(200).json({
      success: true,
      message: "Password reset successfully",
    });
  } catch (error) {

  }
};
