import "./styles.css";
import { useState } from "react";
export default function App() {
  const [tip, setTip] = useState(false);

  return (
    <div className="App">
      <button
        //Enter function to set tip to true and display
        onMouseEnter={() => setTip(true)}
        //Leave function to set tip to false and not display
        onMouseLeave={() => setTip(false)}
        style={{
          margin: "auto",
          marginTop: "40%",
          padding: "15px",
          borderRadius: "1.5rem",
          cursor: "pointer"
        }}
      >
        HOVER
      </button>
      <h1 className={`${tip ? "display" : ""}`}>Hi,I am tooltip!</h1>
    </div>
  );
}
