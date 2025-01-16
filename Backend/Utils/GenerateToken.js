import jwt from "jsonwebtoken";

const GenerateTokenSetCookie = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.SECRET_KEY, {
    expiresIn: "15d",
  });

  res.cookie("jwt", token, {
    maxAge: 15 * 60 * 60 * 60 * 1000,
    httpOnly: true,
    sameSite: "strict",
    secure :process.env.NODE_env !== "production"
  });
};

export default GenerateTokenSetCookie;
