import React, { useState, useEffect } from 'react';

import {useHistory} from "react-router-dom";
import {connect} from "react-redux";
import * as ACTIONS from "../../actions";
import _ from 'lodash';
import  {Form, FormControl, FormCheck, FormLabel, Navbar, Nav, NavDropdown, Container, Spinner, Pagination,Button} from "react-bootstrap";

import './styles.css';
import {datCBalContent, datBalContent} from "../../api/mocks/dataset_prueba1";

const paginationSize = 50;

function useWindowSize() {
	// Initialize state with undefined width/height so server and client renders match
	// Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
	const [windowSize, setWindowSize] = useState({
		width: undefined,
		height: undefined,
	});

	useEffect(() => {
		// Handler to call on window resize
		function handleResize() {
			// Set window width/height to state
			setWindowSize({
				width: window.innerWidth,
				height: window.innerHeight,
			});
		}

		// Add event listener
		window.addEventListener("resize", handleResize);

		// Call handler right away so state gets updated with initial window size
		handleResize();

		// Remove event listener on cleanup
		return () => window.removeEventListener("resize", handleResize);
	}, []); // Empty array ensures that effect is only run on mount

	return windowSize;
}

const ResultContainer = (props) => {
	const history = useHistory();
	const [resultIds, setResultIds] = useState([]);
	const [itemsToRender, setItemsToRender] = useState([]);
	const [currPage, setCurrPage] = useState(0);
	const [numPages, setNumPages] = useState(0);
	const [selectedIndex, setSelectedIndex] = useState(-1);
	const [multiselectionEnabled, setMultiselectionEnabled] = useState(true);

	const [isLoading, setIsLoading] = useState(false);

	const [currResult, setCurrResult] = useState();
	const [currTab, setCurrTab] = useState(0);

	const [currDataSet, setCurrDataSet] = useState('resultados');
	const [loadedDataSet, setLoadedDataSet] = useState();

	const windowSize = useWindowSize();



	const loadDataSet = async (dataSet) => {

		const result = await props.getAllResults(dataSet) || []
		setCurrPage(0);
		setSelectedIndex(-1)
		setNumPages(Math.ceil(result.length / paginationSize));
		setResultIds(result);
		setLoadedDataSet(dataSet);
	}

	useEffect(() => {
		let result = resultIds || [];
		setSelectedIndex(-1)
		setItemsToRender(result.slice(paginationSize * currPage, paginationSize * currPage + paginationSize));
	}, [currPage, resultIds])
/*

			  <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
			  <label className="form-check-label" htmlFor="defaultCheck1">{item}</label>
*/

	const onSelectResult = (i) => {
		setSelectedIndex(i)
		setIsLoading(true)

		props.getResultById(`${currDataSet}/${itemsToRender[i]}`)
		  .then(r => setCurrResult(r))
		  .finally(() => setIsLoading(false));
	}

	const renderItem = (item, i) => {
		return (
		  <li onClick={() => onSelectResult(i)}
			className={`list-group-item form-check ${selectedIndex == i ? "bg-info text-white" : "bg-light text-secondary" }`} >
			  {
			  	multiselectionEnabled ? (
				  <FormCheck>
					  <FormCheck.Input></FormCheck.Input>
					  <FormCheck.Label >{item}</FormCheck.Label>
				  </FormCheck>
				) : (<FormCheck.Label >{item}</FormCheck.Label>)
			  }

		  </li>
		)
	}

	const renderNavBar = () => {
		let active = 1;
		let items = [];
		for (let number = 0; number < numPages; number++) {
			items.push(
			  <Pagination.Item onClick={() => setCurrPage(number)} key={number} active={number === currPage }>
				  {number + 1}
			  </Pagination.Item>,
			);
		}
		return (
		  <Navbar sticky="top" collapseOnSelect  bg="white" >
			  <Container>
				  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
				  <Navbar.Collapse id="responsive-navbar-nav">
					  <Form inline>
						  <Form.Label>Conjunto:&nbsp;
							  &nbsp;
						  </Form.Label>
						  <FormControl onChange={e => setCurrDataSet(e.target.value)} as="select" placeholder="Cargar" className="mr-sm-2">
							  <option value={"resultados"}>resultados</option>
							  <option value={"resultados-2"}>resultados-2</option>
						  </FormControl>
						  <Button onClick={() => loadDataSet(currDataSet)} disabled={loadedDataSet == currDataSet} variant="warning">Cargar</Button>
						  <Pagination style={{marginBottom: 0, marginLeft: '20px'}} >{items}</Pagination>
					  </Form>

				  </Navbar.Collapse>
			  </Container>
		  </Navbar>
		)
	}

	const renderLoading = () => (
	  <div className="text-center" style={{marginTop:250}}>
		  <Spinner animation="border" variant="info" />
	  </div>
	)

	const renderContent = () => {
		if (isLoading) {
			return renderLoading();
		}
		if (currResult) {
			return renderResult();
		}
	}


	const downloadData2 = () => {
		let sujetoLines = `"${currResult.id}","XXXX","XX/XX/XX","${currResult.sujeto.ocupacion}","${currResult.sujeto.email}","${currResult.sujeto.edad}","${currResult.sujeto.genero}"\r\n`

		let categoriesBal = datBalContent();
		let categoriesCBal = datCBalContent();

		console.log("datCBalContent", categoriesBal)
		console.log("datBalContent", categoriesCBal)

		if (currResult.tipo != 'BAL') {
			let aux = currResult.bloques[2]
			currResult.bloques[2] = currResult.bloques[4]
			currResult.bloques[4] = aux;
		}

		let bloqueLines = currResult.bloques.map((b, ib) => {
			return [
				`"BLK${ib +1}" \r\n`,
				b.answers.map(a => (`"${a.value}","${a.error ? 'E' : 'C'}",${a.time}\r\n`)).join(""),
				`\r\n`
			].join("")
		}).join("");

		var csvContent = [
			sujetoLines,
			`6\r\n1\r\n"${currResult.tipo || 'CBAL'}"\r\n\r\n`,
			currResult.tipo == 'BAL' ? categoriesCBal : categoriesBal,
			bloqueLines
		].join("");

		console.log("DOWNLOAD", csvContent)
		var data = new Blob([csvContent], {type: 'text/plain'});

		var url = window.URL.createObjectURL(data);
//		var encodedUri = encodeURI(csvContent);
//		window.open(url, "_blank");

		var downloadLink = document.createElement("a");
		downloadLink.href = url;
		downloadLink.download = `${currResult.id}.dat`;

		document.body.appendChild(downloadLink);
		downloadLink.click();
		document.body.removeChild(downloadLink);
	}

	const handleSelect = (eventKey) => {
		setCurrTab(eventKey)
	}

	const renderCurrTab = () => {
		//var tabIndex ==
		if ( currResult.bloques[currTab]) {
			let bloque = currResult.bloques[currTab];
			return (
			  <table className="table result-table bg-white">
				  <thead>
				  <tr>
					  <th width={150}>Item</th>
					  <th>Error</th>
					  <th>Tiempo</th>
				  </tr>
				  </thead>
				  <tbody>

				  {
				  	bloque.answers.map(a => (
					  <tr>
						  <td>{a.value}</td>
						  <td>{a.error ? 'E' : 'C'}</td>
						  <td>{a.time}</td>
					  </tr>
					))
				  }
				  </tbody>
			  </table>
			)
		}
	}

	const clearFolio = (resultID) => {
		return resultID;
/*		try {
			return resultID.split("/")[1];
		} catch {
			return '';
		}*/
	}

	const renderResult = () => {
		return (
		  <div >
			  <Navbar bg="light" expand="lg" className="border-bottom">
				  <Navbar.Brand href="#home" className={"text-secondary"}>Folio: <strong>{clearFolio(currResult.id)}</strong></Navbar.Brand>
				  <Navbar.Toggle aria-controls="basic-navbar-nav" />

				  <Navbar.Collapse className="justify-content-end">
					  <Button onClick={downloadData2}>.DAT</Button>
				  </Navbar.Collapse>
			  </Navbar>
			  <div className={"container"}>
				  <div className={"row"}>
					  <div className={"col-4"}>
						  <h5>Informacion</h5>
						  <div>Email: {currResult.sujeto.email}</div>
						  <div>Genero: {currResult.sujeto.genero}</div>
						  <div>Edad: {currResult.sujeto.edad}</div>
						  <div>Nivel Educativo: {currResult.sujeto.nivelEducativo}</div>

						  <p>Tipo de prueba: {currResult.tipo || "CBAL" } </p>
					  </div>
					  <div className={"col-8"}>
						  <Nav variant="tabs" defaultActiveKey="0" onSelect={handleSelect}>
							  {currResult.bloques.map((b, ib) =>
								<Nav.Item>
									<Nav.Link eventKey={ib}>BLK{ib + 1}</Nav.Link>
								</Nav.Item>
							  )}
						  </Nav>
						  {
						  	renderCurrTab()
						  }
					  </div>
				  </div>
			  </div>
		  </div>
		)
	}

	return (

	  <div >
		  <div className={"container "} >
			  <div className="row"><h1>Resultados</h1></div>
		  </div>
		  {renderNavBar()}
		  <div className={"container"}>
			  <div className="row justify-content-center bg-white shadow-sm">
				  <div className="col-12">
					  <div className="row">
						  <ul className="list-group col-3" >
							  {itemsToRender.map(renderItem)}
						  </ul>
						  <div className="col-9 padding-none bg-light border" style={{padding:0}}>
							  {renderContent()}
						  </div>
					  </div>
				  </div>
			  </div>
			  <div className="row">
				  <div className="col-12">
					  <p className="text-center">IAT. 2020</p>
				  </div>
			  </div>
		  </div>
	  </div>
	)
	/*
	return (
	  <div className="container-fluid">
		  <div className="row" style={{height: windowSize.height }}>
			  <div className="col-3" style={{backgroundColor: 'white', height: '100%' ,overflow: 'auto'}}>
				  <div className="container">

					  <ul className="list-group">
						  {
							  itemsToRender.map(renderItem)
						  }
					  </ul>
				  </div>
			  </div>
			  <div className="col-9" style={{backgroundColor: 'pink'}}></div>
		  </div>
	  </div>
	)*/

	/*

				  {
					  props.resultIds.map(renderItem)
				  }
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
	 */
}

const mapStateToProps = (state) => {
	return {
		//resultIds: state.userState.resultIds
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		getAllResults: (dataSet = 'resultados') => dispatch(ACTIONS.getAllResults(dataSet)),
		getResultById: (resultID) => dispatch(ACTIONS.getResultById(resultID))
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(ResultContainer);