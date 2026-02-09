
import React from "react";

import { useNavigate } from "react-router-dom";

function Card() {
  const navigate = useNavigate();

  const shortText =
    "React is a JavaScript library for building user interfaces...";

  return (
    <div style={styles.card}>
      <h2>React Card</h2>
      <p>{shortText}</p>

      <button
        style={styles.button}
        onClick={() => navigate("/fulltext")}
      >
        Read More
      </button>
    </div>
  );
}

export default Card;

const styles = {
  card: {
    width: "300px",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  },
  button: {
    marginTop: "10px",
    padding: "8px 12px",
    background: "#2563eb",
    color: "white",
    border: "none",
    cursor: "pointer",
  },
};
