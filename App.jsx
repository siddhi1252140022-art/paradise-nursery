import React from "react";
import "./App.css";

function App() {
  const handleGetStarted = () => {
    window.location.href = "/plants";
  };

  return (
    <div className="landing-page">
      <div className="landing-content">
        <h1>Paradise Nursery</h1>

        <p>
          Welcome to Paradise Nursery, your destination for
          beautiful and healthy houseplants.
        </p>

        <button
          className="get-started-button"
          onClick={handleGetStarted}
        >
          Get Started
        </button>
      </div>
    </div>
  );
}

export default App;
