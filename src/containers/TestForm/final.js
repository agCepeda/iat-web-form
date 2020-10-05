import {generateRandomCode} from "../../services/test_builder";
import React from "react";

const encuestaUrl = "https://tinyurl.com/iptz-epca";

const FinalContainer = (props) => {
	return (
	  <div>
		  <div style={{marginBottom: 150,marginTop: 150 }}>

			  <p className="text-center font-weight-bold" style={{marginBottom:0, fontSize:'1.35em'}}>Esta prueba ha terminado</p>
			  <p className="text-center" style={{marginBottom:0, fontSize:'1em'}}>Para continuar este estudio abre el siguiente link y copia el folio.</p>
			  <p className="text-center" style={{marginBottom:0}}><a target="_blank" href={encuestaUrl}>{encuestaUrl}</a></p>
			  <p className="text-center font-weight-bold">Folio: {props.folio}</p>
		  </div>
		  <div className="row">
			  <p className="col-9" style={{marginBottom:0, fontSize:'0.70em', marginTop: 25}}>
				  Esta prueba es una adaptación de <cite>Implicit, Prueba de Evaluación implicita </cite>
				  desarrollada por Sánchez Miranda & de la Garza González, 2017.
			  </p>
			  <div className="col-3"  style={{marginBottom:0, fontSize:'0.65em'}}>
				  <img className="img-fluid" src="images/copyright_image.png"/>
				  <p className="text-center">Cepeda Hernández, 2020</p>
			  </div>
		  </div>
	  </div>
	)
}

export default FinalContainer;