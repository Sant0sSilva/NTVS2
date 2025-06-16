import { useState } from "react";
import { isValidEmail } from "@/utilities/emailValidation/isValidEmail";

export const useValidateEmail = () => {
  const [isInValid, setIsInvalid] = useState(false);

  const validate = (email: string) => {
    const valid = isValidEmail(email);
    setIsInvalid(!valid);
    return valid;
  };
  return { isInValid, validate };
};
