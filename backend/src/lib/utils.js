import jwt from "jsonwebtoken";

export const generateToken = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });

  res.cookie("jwt", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production", // true on Vercel
    sameSite: "None", // VERY important for cross-origin cookies
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });
};
