import React from "react";

export const InstruccionesContainer = (props) => {
	return (
	  <p>
		  <strong>Para tomar en cuenta</strong>
		  <ul>
			  <li>Ubica uno de tus dedos índice en la letra Z y el otro en la M para facilitar una respuesta rápida.</li>
			  <li>Las palabras en la parte superior te informarán que palabras o imágenes tienes que asociar.</li>
			  <li>Cada palabra o imagen pertenece a una categoría correcta, siendo la mayoría fáciles.</li>
			  <li>La prueba no dará ningún resultado si vas demasiado lento, por lo que es necesario de ir tan rápido como te sea posible.</li>
			  <li>Es de esperar cometer algunos errores si vas muy rápido, no hay ningún problema. Se mostrará un texto de advertencia en caso de clasificar de forma errónea el estímulo, el cual desaparecerá al corregir la respuesta.</li>
			  <li>Para mejores resultados, evita las distracciones y mantente concentrado.</li>
		  </ul>

		  <button type="button" className="btn btn-primary btn-lg" onClick={props.onSiguiente}>Comenzar</button>

	  </p>
	)
}