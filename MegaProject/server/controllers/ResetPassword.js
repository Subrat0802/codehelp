const User = require("../models/User");
const mailSender = require("../utils/mailSender");
const bcrypt = require("bcrypt");

//reset Password TOken
exports.resetPasswordToken = async (req, res) => {
  try {
    //get email from req body
    const email = req.body.email;

    //check user for this email, email validation
    const user = await User.findOne({ email: email });
    if (!user) {
      return res.json({
        success: false,
        message: "Your Email is not Registered with us",
      });
    }

    //generate token
    const token = crypto.randomUUID();

    //user update by adding token and expiration time
    const updatedDetails = await User.findOneAndUpdate(
      { email: email },
      {
        token,
        resetPasswordToken: Date.now() + 5 * 60 * 1000,
      },
      { new: true }
    );

    //create url
    const url = `http://localhost:3000/update-password/${token}`;

    //send mail containenig the url
    await mailSender(
      email,
      "Password Reset Link",
      `Password Reset Link:${url}`
    );

    //return response
    return res.json({
      success: true,
      message:
        "Email sent successfully, please check email and change the password",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Something went wrong while sending reset password mail",
    });
  }
};

//reset Password
exports.resetPassword = async (req, res) => {
  try {
    //fetch data
    const { password, confirmPassword, token } = req.body;

    //validation
    if (password !== confirmPassword) {
      return res.json({
        success: false,
        message: "Password not matching",
      });
    }

    //get user details from db using token
    const userDetails = await User.findOne({ token: token });

    //if no entery = invalid token
    if (!userDetails) {
      return res.status(403).json({
        success: false,
        message: "Token is invalid",
      });
    }

    //token time check
    if (userDetails.resetPasswordExpires < Date.now()) {
      return res.json({
        success: false,
        message: "Token is expired, please re generat your token",
      });
    }

    //hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    //update password
    await User.findOneAndUpdate(
      { token: token },
      { password: hashedPassword },
      { new: true }
    );

    //return res
    return res.status(200).json({
      success: true,
      message: "Password reset successful",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Something went wrong while reset password",
    });
  }
};
