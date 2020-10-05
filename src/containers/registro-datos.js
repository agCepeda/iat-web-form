import React, {useState} from "react";
import {connect} from "react-redux";
import * as ACTIONS from '../actions'

const RegistroDatosContainer = (props) => {

	const [edad, setEdad] = useState("");
	const [genero, setGenero] = useState("");
	const [estado, setEstado] = useState("");
	const [ocupacion, setOcupacion] = useState("");
	const [nivelEducativo, setNivelEducativo] = useState("");
	const [email, setEmail] = useState("");

	const continuarClick = () => {
		props.setSujeto({ edad, genero, estado, ocupacion, nivelEducativo, email });
		props.onSiguiente();
	}

	return (
	  <div>
		  <div className="form-group">
			  <label for="paperInputs1">Edad</label>
			  <input class="form-control" type="text" placeholder="Edad" id="paperInputs1" value={edad} onChange={e => setEdad(e.target.value)}/>
		  </div>
		  <div className="form-group">
			  <label htmlFor="paperSelects1">Género</label>
			  <select class="form-control" id="paperSelects1"  value={genero} onChange={e => setGenero(e.target.value)}>
				  <option value="">Selecciona opcion</option>
				  <option value="M">Mujer</option>
				  <option value="H">Hombre</option>
				  <option value="NA">Prefiero no decirlo</option>
			  </select>
		  </div>
		  <div className="form-group">
			  <label htmlFor="paperSelects1">Estado de la República Mexicana donde te encuentras</label>
			  <select class="form-control" id="paperSelects1"  value={estado} onChange={e => setEstado(e.target.value)}>
				  <option value="">Selecciona opcion</option>
				  <option value="COAH">Coahuila</option>
				  <option value="NL">Nuevo León</option>
			  </select>
		  </div>
		  <div className="form-group">
			  <label>Ocupación</label>
			  <select class="form-control" value={ocupacion} onChange={e => setOcupacion(e.target.value)}>
				  <option value="">Selecciona opcion</option>
				  <option value="1">Estudiante</option>
				  <option value="2">Profesor</option>
			  </select>
		  </div>
		  <div className="form-group">
			  <label  htmlFor="paperSelects1">Nivel Educativo Actual</label>
			  <select  class="form-control"  id="paperSelects1" value={nivelEducativo} onChange={e => setNivelEducativo(e.target.value)}>
				  <option value="">Selecciona opcion</option>
				  <option value="1">Secundaria</option>
				  <option value="2">Preparatoria</option>
				  <option value="3">Técnico</option>
				  <option value="4">Licenciatura</option>
				  <option value="5">Maestría</option>
				  <option value="6">Doctorado</option>
			  </select>
		  </div>
		  <div className="form-group">
			  <label htmlFor="paperInputs1">Si deseas información adicional sobre el estudio, deja tu correo electrónico en el campo debajo</label>
			  <input class="form-control" type="text" placeholder="Email" id="paperInputs1"  value={email} onChange={e => setEmail(e.target.value)}/>
		  </div>
		  <button type="button" className="btn btn-primary btn-lg" onClick={continuarClick}>Continuar</button>

	  </div>
	);
}
const mapStateToProps = () => {

};
const mapDispatchToProps = (dispatch) => {
	console.log("mapDispatchToProps", mapDispatchToProps)
	return {
		setSujeto: (sujeto) => dispatch(ACTIONS.setSujeto(sujeto))
	}
};

var connected = connect(mapStateToProps,mapDispatchToProps)(RegistroDatosContainer);

export default connected;