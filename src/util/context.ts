import { createContext } from "react";

export type LanguageContextType = {
  language: string;
  setLanguage: React.Dispatch<React.SetStateAction<string>>;
};

const LanguageContext = createContext<LanguageContextType>({
  setLanguage: () => {},
  language: "",
});

export default LanguageContext;
