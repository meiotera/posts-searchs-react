import React from "react";
import "./styles.css";

export default function Input({ searchValue, handleChange }) {
  return (
    <input
      className="input"
      type="search"
      onChange={handleChange}
      value={searchValue}
      placeholder="Search..."
    />
  );
}
