import React from "react";

export const InicioConsentimientoContainer = (props) => {
	return (
	  <div>
		  <p>
			  Por medio de la presente hago constatar que estoy enterado de los objetivos que persigue la investigación
			  -Actitud ambiental explícita e implícita, religiosidad y espiritualidad- así como la forma en la que se
			  lleva a cabo. Además, manifiesto que participo en este estudio en forma voluntaria y sin compromiso.
		  </p>
		  <p>
			  Tengo conocimiento de que el estudio es anónimo y toda la información que desprenda será de carácter
			  estrictamente confidencial, será utilizada únicamente por el equipo de investigación del proyecto y no
			  estará disponible para ningún otro propósito. Los resultados de este estudio serán publicados con fines
			  científicos, se presentarán como datos grupales de tal forma que no implicará la identificación personal.
		  </p>
		  <p>
			  Marcar en aceptar no establece ningún tipo de obligación, solo significa que estoy enterado y que acepto
			  participar voluntariamente en la investigación mencionada.
		  </p>
		  <button type="button" className="btn btn-primary btn-lg" onClick={props.onSiguiente}>Continuar</button>
	  </div>
	);
}