import bcrypt from "bcrypt";
const saltRounds = 10;

export const hashP = async (p) => {
  const hP = await bcrypt.hash(p, saltRounds);
  return hP;
};

export const uHashP = async (p, hP) => {
  const isValid = await bcrypt.compare(p, hP);
  return isValid;
};
