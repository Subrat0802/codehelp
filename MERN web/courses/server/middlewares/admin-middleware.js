const adminMiddleware = async (req, res, next) => {
  try {
    // console.log(req.user);
    const adminRole = req.user.isAdmin;
    if(!adminRole){
        return res.status(404).json({
            message:"Access denied, user is not an Admin"
        })
    }    
    next()
  } catch (error) {
    next(error);
  }
};

module.exports = adminMiddleware;
