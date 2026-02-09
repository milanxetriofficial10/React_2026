import React, { useState } from "react";

function SearchBar() {
  const [search, setSearch] = useState("");

  const users = [
    "Milan Adhikari",
    "React Developer",
    "Facebook Clone",
    "JavaScript",
    "Nepali Programmer",
  ];

  return (
    <div style={styles.box}>
      {/* Search input */}
      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={styles.input}
      />

      {/* Search result */}
      <div style={styles.result}>
        {users
          .filter((item) =>
            item.toLowerCase().includes(search.toLowerCase())
          )
          .map((item, index) => (
            <p key={index}>🔍 {item}</p>
          ))}
      </div>
    </div>
  );
}

export default SearchBar;

const styles = {
  box: {
    width: "300px",
    margin: "30px auto",
    fontFamily: "Arial",
  },
  input: {
    width: "100%",
    padding: "8px 12px",
    borderRadius: "20px",
    border: "1px solid #ccc",
    outline: "none",
  },
  result: {
    marginTop: "10px",
  },
};
