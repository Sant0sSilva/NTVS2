export const isValidEmail = (email: string): boolean => {
  const regEXP = /^[a-zA-Z0-9._]+@[a-z]+\.[a-z]{2,6}$/;

  const isEmailValid = regEXP.test(email);
  const isEmailEmpty = email.trim() === "";

  if (isEmailEmpty || !isEmailValid) {
    return false;
  }
  return true;
};
