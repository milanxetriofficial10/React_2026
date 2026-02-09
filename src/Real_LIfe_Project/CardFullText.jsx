import React from "react";
import { useNavigate } from "react-router-dom";

function FullText() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: "40px" }}>
      <h1>React Full Article</h1>

      <p>
        React is a powerful JavaScript library developed by Facebook.
        It helps developers build fast, interactive, and reusable UI
        components. React uses a virtual DOM, making applications
        efficient and smooth.
      </p>

      <button onClick={() => navigate("/")}>
        Go Back
      </button>
    </div>
  );
}

export default FullText;
