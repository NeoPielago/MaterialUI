import { useState } from "react";
import "./App.css";
import { MuiTypography } from "./components/MuiTypography";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <MuiTypography></MuiTypography>
    </>
  );
}

export default App;
