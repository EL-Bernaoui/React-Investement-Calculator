import React, { useState } from "react";

import Header from "./components/Header.jsx";
import UserInput from "./components/UserInput.jsx";
import Results from "./components/Results.jsx";

function App() {
  const [inputValue, setInputValue] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const isValidInput = inputValue.duration > 0;

  function handleChange(inputField, newValue) {
    setInputValue((prevInputvalue) => ({
      ...prevInputvalue,
      [inputField]: +newValue,
    }));
  }
  return (
    <>
      <Header />
      <UserInput inputValue={inputValue} onChange={handleChange} />
      {!isValidInput && (
        <p className="center">Please enter a duration greater than Zero.</p>
      )}
      {isValidInput && <Results input={inputValue} />}
    </>
  );
}

export default App;
