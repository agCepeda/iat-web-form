import React from "react";

export const EstimulosContainer = (props) => {
	return (
	  <div>

		  <p>
			  A continuación se te presentarán una serie de estímulos los cuales deberás clasificar en cada una de las
			  categorías que se muestran a continuación:
		  </p>
		  <div className="row">
			  <p className="col-3 col">
				  <strong>NATURALEZA</strong><br/>
				  IMÁGENES DE NATURALEZA
			  </p>
			  <p className="col-3 col">
				  <strong>CIUDAD</strong><br/>
				  IMÁGENES DE CIUDAD
			  </p>
			  <p className="col-3 col">
				  <strong>BUENO</strong><br/>
				  AMOR<br/>
				  SERENIDAD<br/>
				  OPTIMISMO<br/>
				  ÉXITO<br/>
				  FELICIDAD<br/>
				  PAZ<br/>


			  </p>
			  <p className="col-3 col">
				  <strong>MALO</strong><br/>
				  MIEDO<br/>
				  TRISTEZA<br/>
				  ODIO<br/>
				  TEMOR<br/>
				  FASTIDIO<br/>
				  DESPRECIO<br/>

			  </p>
		  </div>
		  <p>
			  La prueba se presentará en cinco bloques
		  </p>
		  <button className="btn btn-primary btn-lg" type="button" onClick={props.onSiguiente}>Continuar</button>
	  </div>
	);
}