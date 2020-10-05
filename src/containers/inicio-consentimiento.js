import React from "react";

export const InicioConsentimientoContainer = (props) => {
	return (
	  <div>
		  <p>
			  Gracias por tu interés en el estudio. A continuación completarás una <strong>Prueba de Asociación Implícita</strong>. La
			  prueba tardará menos de 10 minutos en completarse. Para mejores resultados, minimiza las distracciones y
			  cierra los programas abiertos en tu dispositivo.
		  </p>
		  <p>
			  Este estudio es completamente anónimo, tu nombre u otra información de identificación no se recopila en
			  ningún momento. Los datos recopilados se agruparán y analizarán solo en forma agregada, con fines meramente académicos.

		  </p>
		  <p>
			  Si tienes alguna pregunta o inquietud acerca de este estudio, comunícate con la investigadora principal, <strong>Martha E. González M.</strong>, a
			  la dirección <a href="mailto:elva.gonzalezmrn@uanl.edu.mx">elva.gonzalezmrn@uanl.edu.mx</a>; <strong>Facultad de
			  Psicología de la Universidad Autónoma de Nuevo León. Monterrey, N. L., México</strong>.
		  </p>
		  <p>
			  Si aceptas libremente participar en este estudio, haz clic en el botón “Continuar" para iniciar con la prueba.
		  </p>
		  <button type="button" className="btn btn-primary btn-lg" onClick={props.onSiguiente}>Continuar</button>
	  </div>
	);
}