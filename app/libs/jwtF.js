import jwt from "jsonwebtoken";

export function sign(payload) {
  const token = jwt.sign(JSON.stringify(payload), process.env.JWT_SECRET);
  return token;
}

export function verify(token) {
  const data = jwt.verify(token, process.env.NEXTAUTH_SECRET);
  return data;
}
