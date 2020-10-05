import React, { useState, useEffect } from 'react';

import {useHistory} from "react-router-dom";

const ResultContainer = (props) => {
	const history = useHistory();

	return (
	  <div>
		  <h3>Resultado</h3>
		  {(props.testResult || []).map(bloque => {
			  return (<div>
				  <table>
					  <thead>
					  <tr>
						  <th colSpan={4}>
							  {bloque.name}
						  </th>
					  </tr>
					  <tr>
						  <td>#</td>
						  <td>Respuesta</td>
						  <td>Tiempo</td>
						  <td>Acertada</td>
					  </tr>
					  </thead>
					  <tbody>
					  {
					  	bloque.answers.map((answer, index) => (
					  	  <tr>
							  <td>{index + 1}</td>
							  <td>{answer.key}</td>
							  <td>{answer.answerTime}</td>
							  <td>{answer.error ? 'X' : ''}</td>
						  </tr>
						))
					  }
					  </tbody>
				  </table>
			  </div>)
		  })}
		  <button className="btn" onClick={() => history.push("/fin")}>Finalizar</button>
	  </div>
	)
}

export default ResultContainer;