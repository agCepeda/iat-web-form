import React, { useEffect, useState } from "react";
import { Card } from 'primereact/card';

import "./styles.css";
import { Button } from "primereact/button";
import logo from "../../logo.svg";

const ItemFormContainer = (props) => {

  const [isVisible, setIsVisible] = useState(false);
  const [counter, setCounter] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [startTime, setStartTime] = useState();
  const [hasError, setHasError] = useState(false);
  const [errorRegistered, setErrorRegistered] = useState(false);

  const zKeyPress = useKeyPress(['z', 'Z']);
  const mKeyPress = useKeyPress(['m', 'M']);

  const [item, setItem] = useState(props.item || {});

  useEffect(() => {
    setupStartTime();
    setItem(props.item || {});
    setErrorRegistered(false);
  }, [props.item]);

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

  const setupStartTime = () => {
    var initialTime = new Date();
    setStartTime(initialTime);
  }

  const registerAnswer = (key, timeOffset) => {
    var userAnswer = (key == 'M' || key == 'm')? props.categoryRight : props.categoryLeft;
    userAnswer = userAnswer || [];

    var hasError = userAnswer.indexOf(props.item.answer) < 0;

    setHasError(hasError);
    setErrorRegistered(hasError);
    if (hasError) {
      setTimeout(() => {
        //props.onItemAnswered(key, timeOffset, true);
        setHasError(false);
      }, 500);
     } else {
      props.onItemAnswered(props.item.value, timeOffset, errorRegistered);
    }
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
            <div>

            </div>
              <div className="lobby-button">
                <a type="btn btn-link btn-lg" onClick={() => runTest()}>
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
      <div className="row">
        <div className="col-12">
          <p className="error-description"  hidden={!hasError}>Error </p>


          {item.type == 'word' && <h1 className="text-center" style={{marginTop: 150, marginBottom: 150}}>{item.value}</h1>}


        </div>
        <div className="col-12">

          {item.type == 'image' && <img alt="timer" className="img-fluid w-100" src={`images/${item.value}`} /> }
        </div>
        <div className="col-6" style={{ marginTop: 20}}>

          <button className="btn btn-light btn-block" onClick={() => {
            var answerTime = new Date();

            if (answerTime == null || startTime == null) { return; }
            let timeOffset = answerTime.getTime() - startTime.getTime();
            registerAnswer("Z", timeOffset);
          }}>
            <span>Z</span>
            <p><strong dangerouslySetInnerHTML={{__html: props.leftTitle}}></strong> </p>
          </button>
        </div>
        <div className="col-6" style={{ marginTop: 20}}       >

          <button className="btn btn-light btn-block" onClick={() => {
            var answerTime = new Date();

            if (answerTime == null || startTime == null) { return; }
            let timeOffset = answerTime.getTime() - startTime.getTime();
            registerAnswer("M", timeOffset);
          }}>
            <span>M</span>
            <p><strong dangerouslySetInnerHTML={{__html: props.rightTitle}}></strong> </p>
          </button>
        </div>
      </div>
    )
  };

  return renderItemForm();
  // return isVisible ? renderItemForm() : renderLobby();
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