import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";   // ✅ FIXED IMPORT
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import Analyze from "./pages/Analyze";
import HistoryPage from "./pages/HistoryPage";
import "./App.css";

function App() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.body.classList.toggle("light", theme === "light");
  }, [theme]);

  return (
    <>
      <Header theme={theme} setTheme={setTheme} />

      <div className="content">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/analyze" element={<Analyze />} />
          <Route path="/history" element={<HistoryPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
