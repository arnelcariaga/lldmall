import bcrypt from "bcrypt";
const saltRounds = 10;

export const hashP = async (p) => {
  try {
    const passwordToString = p.toString();
    const hP = await bcrypt.hash(passwordToString, saltRounds);
    return hP;
  } catch (error) {
    return error;
  }
};

export const uHashP = async (p, hP) => {
  try {
    const isValid = await bcrypt.compare(p, hP);
    return isValid;
  } catch (error) {
    return error;
  }
};
