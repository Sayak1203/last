import React, { useState } from "react";
import "./LoveCompatibility.css"; // Import CSS file
import { Link } from "react-router-dom";

const LoveCompatibility = () => {
  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");
  const [result, setResult] = useState("");

  const checkCompatibility = () => {
    const specialName1 = "Sayak";  // Change to your name
    const specialName2 = "Sayani";   // Change to her name

    if (
      (name1.toLowerCase() === specialName1.toLowerCase() &&
        name2.toLowerCase() === specialName2.toLowerCase()) ||
      (name1.toLowerCase() === specialName2.toLowerCase() &&
        name2.toLowerCase() === specialName1.toLowerCase())
    ) {
      setResult("💖 100% Match! You two are soulmates! 💖");
    } else {
      const randomMatch = Math.floor(Math.random() * (95 - 60 + 1)) + 60;
      setResult(`💘 Your love match is ${randomMatch}% 💘`);
    }
  };

  return (
    <div className="hero">

      <div className="love-container">
        <h2>💕 Love Compatibility Checker 💕</h2>
        <div className="input-container">
          <input
            type="text"
            placeholder="Enter first name"
            value={name1}
            onChange={(e) => setName1(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter second name"
            value={name2}
            onChange={(e) => setName2(e.target.value)}
          />
        </div>
        <button onClick={checkCompatibility}>Check Love Score</button>
        {result && <h3 className="love-result">{result}</h3>}
      </div>

      <div className='return'>
        <Link to='/start'> <button> Return </button> </Link> 
      </div>
    </div>
  );
};

export default LoveCompatibility;
