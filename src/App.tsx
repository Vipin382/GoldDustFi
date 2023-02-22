import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GoldDustHeader from "./components/Landing/Header";
import SecondHeader from "./components/Landing/Header/SecondHeader";
import GoldDustLanding from "./pages";
import AboutPage from "./pages/About";
import LanguageContext, { LanguageContextType } from "./util/context";

function App() {
  const [language, setLanguage] = useState<string>("ENGLISH");

  return (
    <BrowserRouter>
      <LanguageContext.Provider
        value={{ language: language, setLanguage: setLanguage }}
      >
        <SecondHeader />
        <GoldDustHeader />
      </LanguageContext.Provider>
      <Routes>
        <Route path={"/"} element={<GoldDustLanding />} />
        <Route path={"/about"} element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
