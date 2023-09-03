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

export default App;
