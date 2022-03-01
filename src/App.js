import "./App.css";
import dice from "./images/icon-dice.svg";
import Axios from "axios";
import { useState } from "react";
// import useFetch from "./useFetch";

function App() {
    const [advice, setAdvice] = useState("");
    const [adviceID, setAdviceID] = useState("")

    const getAdvice = () => {
      Axios.get("https://api.adviceslip.com/advice").then((res) => {
        setAdvice(res.data.slip.advice);
        setAdviceID(res.data.slip.id)
      });
    } 
    

  return (
    <>
      <div className="app">
      <h2 className="head-text fhead-text">Click the Dice to get Advice</h2>
        <div className="app__container">
          <h3 className="head-text">Advice #{adviceID}</h3>
          <p className="body-text">“{advice}”</p>
          <div className="page-divider">
            <div className="line1"></div>
            <div className="vline1"></div>
            <div className="vline2"></div>
            <div className="line2"></div>
          </div>
          <div className="app__control" onClick={getAdvice}>
            <img className="control" src={dice} alt="Dice Icon" />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
