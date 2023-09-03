// 1. Import the React and ReactDom library
import React from "react";
// understands what a component is and how multiple components work together
import ReactDOM from "react-dom/client";
// knows how to get a component to show in the browser, specifically for web dev

// 2. Get a reference to the div with ID root
const el = document.getElementById("root");

// 3. Tell React to take controls of that element
const root = ReactDOM.createRoot(el);

// 4. Create a component
function App() {
  const inputType = "number";
  const minValue = 5;
  const maxValue = 10;
  return (
    <input
      style={{ border: "3px solid red" }}
      type={inputType}
      min={minValue}
      max={maxValue}
      autoFocus={true}
    />
  );
}
// 5. Show the component on the screen
root.render(<App />);
