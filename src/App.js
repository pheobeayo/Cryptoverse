import React from "react";
import { Route, Routes } from "react-router-dom";
import GamePage from "./pages/GamePage";
import LandingPage from "./pages/LandingPage";
import "./index.css";
import MainLayout from "./pages/MainLayout";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/rubipoly" element={<GamePage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
