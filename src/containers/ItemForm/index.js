import React, { useEffect, useState } from "react";
import { Card } from 'primereact/card';

import "./styles.css";
import { Button } from "primereact/button";
import logo from "../../logo.svg";

const ItemFormContainer = () => {

  const [suggestions, setSuggestions] = useState();
  const [customer, setCustomer] = useState();
  const [isVisible, setIsVisible] = useState(false);

  const renderLobby = () => {
    return (
      <Card>
        <div className="p-grid p-align-center">
          <div className="p-offset-3 p-col-6">
            <h1></h1>
              <div className="lobby-button">
                <a type="button" onClick={() => setIsVisible(true)}><span>PRESIONA LA TECLA <strong>A</strong>  O <strong>ESTE BOTON</strong> PARA CONTINUAR</span></a>
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

//   return (
//     <Card>
//       <h1>BLOQUE 2</h1>
//       <div className="p-grid">
//         <div className="p-col">
//             <h3>Naturaleza</h3>
//         </div>
//         <div className="p-col">
//             <h3>Naturaleza</h3>
//         </div>
//       </div>
//     </Card>
//   )
}

export default ItemFormContainer;