import React from "react";
import { Routes, Route } from "react-router-dom";  // no BrowserRouter here
import InstagramProfile from "./Real_LIfe_Project/Prifiles/InstagramProfile";
import EditProfile from "./Real_LIfe_Project/Prifiles/EditProfile";

function App() {
  return (
    <Routes>
      <Route path="/" element={<InstagramProfile />} />
      <Route path="/edit-profile" element={<EditProfile />} />
    </Routes>
  );
}

export default App;
