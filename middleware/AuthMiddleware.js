const tokenutil = require("../util/TokenUtil");

const authUser = (req, res, next) => {
  //get token from request header.. bearer token
  //bearer token

  const token = req.headers.authorization;
  //check bearer is there or not
  if (token && token.startsWith("Bearer ")) {
    const tokenValue = token.split(" ")[1];
    const isValidate = tokenutil.validateToken(tokenValue);
    if (isValidate != null) {
      next();
    } else {
      res.status(401).json({
        message: "unauthorized",
      });
    }
  } else {
    res.status(401).json({
      message: "Invalid token",
    });
  }
};
module.exports = {
  authUser,
};
