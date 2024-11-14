import { createContext } from "react";

const feedbackContext = createContext;

export const feedbackProvider = ({ Children }) => {
  return (
    <feedbackContext.provider value={{}}>{Children}</feedbackContext.provider>
  );
};
export default feedbackContext;
