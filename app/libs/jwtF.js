import jwt from "jsonwebtoken";

export function sign(payload) {
  try {
    const token = jwt.sign(payload, process.env.JWT_SECRET);
    return token;
  } catch (error) {
    return error;
  }
}

export function verify(token) {
  try {
    const data = jwt.verify(token, process.env.JWT_SECRET);
    return data;
  } catch (error) {
    return error;
  }
}
