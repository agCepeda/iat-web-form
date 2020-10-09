import React, { useState, useEffect } from 'react';

import {useHistory} from "react-router-dom";
import {connect} from "react-redux";
import * as ACTIONS from "../../actions";
import _ from 'lodash';

const pageSize = 50;

const ResultContainer = (props) => {
	const history = useHistory();
	const [resultados, setResultados] = useState();
	const [currPage, setCurrPage] = useState(0);
	const [numPages, setNumPages] = useState(0);
	useEffect(() => {
		props.getAllResults();
	}, []);


	useEffect(() => {
		let result = props.resultIds || [];
		setCurrPage(0);
		_.chunk
		setNumPages(Math.ceil(result.length / pageSize))
	}, [props]);

	const renderItem = (item, i) => {
		return (
		  <tr>
			  <td>

				  <div className="form-check">
					  <input className="form-check-input" type="checkbox" name="gridRadios" id="gridRadios2"
							 value="option2" key={i} />
				  </div>
			  </td>
			  <td>{item}</td>
		  </tr>
		)
	}

	return (
	  <div>
		  <h3>Resultado</h3>
		  <p> Pagina {currPage + 1} of {numPages}</p>
		  <table>
			  <thead>
			  <tr>
				  <th> <input type="checkbox" className="form-check-input"/></th>
				  <th>Identificador</th>
			  </tr>
			  </thead>
			  <tbody>

			  {
				  props.resultIds.map(renderItem)
			  }
			  </tbody>
		  </table>
	  </div>
	)
}

const mapStateToProps = (state) => {
	return {
		resultIds: state.userState.resultIds
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		getAllResults: () => dispatch(ACTIONS.getAllResults())
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(ResultContainer);