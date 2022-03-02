import "./App.css";
import dice from "./images/icon-dice.svg";
import Axios from "axios";
import { useState } from "react";
import { motion } from "framer-motion";

function App() {
  const [advice, setAdvice] = useState("");
  const [adviceID, setAdviceID] = useState("");
  const [load, setLoad] = useState(false);

  const getAdvice = () => {
    Axios.get("https://api.adviceslip.com/advice").then((res) => {
      setAdvice(res.data.slip.advice);
      setAdviceID(res.data.slip.id);
    });
  };

  const rollingBall = () => (
    <motion.div
      animate={{
        scale: [1, 2, 2, 2.1],
        rotate: [0, 90, 270, 90, 0, 360],
      }}
      className="app__control"
      onClick={() => setLoad(true)}
    >
      <img className="control" src={dice} alt="Dice Icon" />
    </motion.div>
  );

  const contain = () => (
    <motion.div
      transition={{ ease: "easeInOut", duration: 2 }}
      className="app__container"
    >
      <h3 className="head-text">Advice #{adviceID}</h3>
      <p className="body-text">“{advice}”</p>
      <div className="page-divider">
        <div className="line1"></div>
        <div className="vline1"></div>
        <div className="vline2"></div>
        <div className="line2"></div>
      </div>
      <motion.div
        transition={{delay: 3}}
        animate={{
          scale: [1, 2, 1],
          rotate: [0, 90, 270],
        }}
        className="app__control"
        onClick={getAdvice}
      >
        <img className="control" src={dice} alt="Dice Icon" />
      </motion.div>
    </motion.div>
  );

  return (
    <>
      <div className="app">
        <h2 className="head-text fhead-text">Click the Dice to get Advice</h2>
        {!load ? rollingBall() : contain()}
      </div>
    </>
  );
}

export default App;
