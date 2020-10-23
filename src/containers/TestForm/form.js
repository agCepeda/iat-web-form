import React, {useState, useEffect } from "react";
import {buildTest} from "../../services/test_builder";
import dataset1 from "../../api/dataset_monica_prueba1";
import dataset2 from "../../api/dataset_monica_prueba2";
import BlockForm from "./block";

const bloques = buildTest(dataset2);


const Form = (props) => {
	const [blockCount, setBlockCount] = useState(0);
	const [isTransitionVisible, setIsTransitionVisible] = useState(true);
	const [bloquesOutput, setBloquesOutput] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		cacheImages([
			"images/A01.jpg",
			"images/A02.jpg",
			"images/A03.jpg",
			"images/A04.jpg",
			"images/A05.jpg",
			"images/A06.jpg",

			"images/B01.jpg",
			"images/B02.jpg",
			"images/B03.jpg",
			"images/B04.jpg",
			"images/B05.jpg",
			"images/B06.jpg",
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