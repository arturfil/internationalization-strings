import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ParticipantsPage from "./pages/ParticipantsPage";
import InformationPage from "./pages/InformationPage";
import { useState } from "react";

export const App = () => {
  const [language, setLanguage] = useState("eng");

  return (
    <BrowserRouter>
      <div style={{ padding: 100 }}>
        <Routes>
          <Route
            path="/"
            element={<HomePage language={language} setLanguage={setLanguage} />}
          />
          <Route
            path="/information"
            element={
              <InformationPage language={language} setLanguage={setLanguage} />
            }
          />
          <Route
            path="/participants"
            element={
              <ParticipantsPage language={language} setLanguage={setLanguage} />
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
