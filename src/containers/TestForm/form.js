import React, {useState, useEffect } from "react";
import {buildContraBalancedTest,buildBalancedTest} from "../../services/test_builder";
import dataset_prueba1 from "../../api/mocks/dataset_prueba1";
import BlockForm from "./block";

const bloques = buildBalancedTest(dataset_prueba1);


const Form = (props) => {
	const [blockCount, setBlockCount] = useState(0);
	const [isTransitionVisible, setIsTransitionVisible] = useState(true);
	const [bloquesOutput, setBloquesOutput] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		cacheImages([
			"images/A1.jpg",
			"images/A2.jpg",
			"images/A3.jpg",
			"images/A4.jpg",
			"images/A5.jpg",
			"images/A6.jpg",

			"images/B1.jpg",
			"images/B2.jpg",
			"images/B3.jpg",
			"images/B4.jpg",
			"images/B5.jpg",
			"images/B6.jpg",
		]).finally(() => setIsLoading(false));
	}, []);

	const cacheImages = (array) => {
		var promises = array.map(src => new Promise((resolve, reject) => {
			const img = new Image();
			img.src = src;
			img.onload = resolve;
			img.onerror = reject;
		}));

		return Promise.all(promises);
	}

	const renderLoading = () => {
		return (
		  <div>
			  Loading...
		  </div>
		)
	}


	const renderBlockTransition = () => {
		return (
		  <div className="row justify-content-center">
			  <h4 className="col-12 text-center" >{bloques[blockCount].name}</h4>
			  <div className="col-10 text-center" style={{marginTop:150, marginBottom: 150}}
				   dangerouslySetInnerHTML={{__html:bloques[blockCount].instructions}}></div>
			  <a className="col-10 text-center" onClick={() => startNewBlock()}>
				  <span> PRESIONA <strong>ESTE LINK</strong>  PARA CONTINUAR</span>
			  </a>
		  </div>
		)
	};

	const onBlockFinished = (answers) => {
		var bloque = bloques[blockCount];
		var newBloque = { name: bloque.name, answers };
		var newBloquesOutput = [...bloquesOutput, newBloque];
		setBloquesOutput(newBloquesOutput);
		setIsTransitionVisible(true);
		if (blockCount + 1 >= bloques.length) {
			if (props.onTestFinished != null) {
				props.onTestFinished(newBloquesOutput);
			}
		}
		setBlockCount(blockCount + 1);
	}

	const startNewBlock = () => {
		setBlockCount(blockCount);
		setIsTransitionVisible(false);
	}

	const renderBlockForm = (blockCount) => {
		return <BlockForm block={bloques[blockCount]} onBlockFinished={onBlockFinished}/>;
	}
	if (blockCount >= bloques.length) { return <div></div>}

	return isLoading ? renderLoading() : isTransitionVisible ? renderBlockTransition() : renderBlockForm(blockCount);
}

export default Form;