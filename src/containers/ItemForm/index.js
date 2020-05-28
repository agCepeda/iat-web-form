import React, { useEffect, useState } from "react";
import { Card } from 'primereact/card';

import "./styles.css";
import { Button } from "primereact/button";
import logo from "../../logo.svg";

const ItemFormContainer = () => {

  const [isVisible, setIsVisible] = useState(false);
  const [counter, setCounter] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [startTime, setStartTime] = useState();
  
  const zKeyPress = useKeyPress(['z', 'Z']);
  const mKeyPress = useKeyPress(['m', 'M']);

  useEffect(() => {
    if (zKeyPress == null || startTime == null) { return; }
    let timeOffset = zKeyPress.getTime() - startTime.getTime();
    registerAnswer("Z", timeOffset);
  }, [zKeyPress]);

  useEffect(() => {
    if (mKeyPress == null || startTime == null) { return; }
    let timeOffset = mKeyPress.getTime() - startTime.getTime();
    registerAnswer("M", timeOffset);
  }, [mKeyPress]);

  const registerAnswer = (key, timeOffset) => {
    setAnswers([...answers, { key, timeOffset }]);
    showNextItem();
  }

  const runTest = () => {
    setIsVisible(true);
    showNextItem();
  }

  const showNextItem = () => {
    var initialTime = new Date();
    setStartTime(initialTime);
  }

  const renderLobby = () => {
    return (
      <Card>
        <div className="p-grid p-align-center">
          <div className="p-offset-3 p-col-6">
            <h1></h1>
              <div className="lobby-button">
                <a type="button" onClick={() => runTest()}>
                  <span>
                    PRESIONA LA TECLA 
                    <strong>A</strong>  O <strong>ESTE BOTON</strong> 
                    PARA CONTINUAR
                  </span>
                </a>
              </div>
          </div>
        </div>
      </Card>
    )
  };

  const renderItemForm = () => {
    return (
      <Card>
      <div className="p-grid p-align-center">
        <div className="p-offset-3 p-col-6">
          <p>{JSON.stringify(answers)}</p>
          <h1>BLOQUE 1</h1>
        </div>
      </div>
        <div className="p-grid p-align-center">
          <div className="p-offset-3 p-col-6">
            <p className="error-description">Error description</p>
            <img className="item-resource-container" src={logo}></img>
          </div>
        </div>
          <div className="p-grid ">
            <div className="p-col-6">
              <p>Z</p>
              <h3>BUENO</h3>
            </div>
            <div className="p-col-6">
              <p>M</p>
              <h3>MALO</h3>
            </div>
          </div>
      </Card>
    )
  };

  return isVisible ? renderItemForm() : renderLobby();
}

// Hook
function useKeyPress(targetKeys) {
  // State for keeping track of whether key is pressed
  const [keyPressed, setKeyPressed] = useState(null);

  // If pressed key is our target key then set to true
  function downHandler({ key }) {
    if (targetKeys.indexOf(key) >= 0) {
      setKeyPressed(new Date());
    }
  }

  // Add event listeners
  useEffect(() => {
    window.addEventListener('keypress', downHandler);
    // Remove event listeners on cleanup
    return () => {
      window.removeEventListener('keypress', downHandler);
    };
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return keyPressed;
}

export default ItemFormContainer;