export const getFirstLetters = (str1, str2) => {
  const firstLetter1 = str1?.trim().charAt(0).toUpperCase();
  const firstLetter2 = str2?.trim().charAt(0).toUpperCase();

  return `${firstLetter1}${firstLetter2}`;
};
