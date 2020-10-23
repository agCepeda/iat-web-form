export const buildTest = (dataset) => {
	const buildBlock = (name, left = [], right = [], items, instructions) => ({
		name: name,
		leftTitle:  left.map(r => r.name).join("<br />") ,//`${dataset.category_02.name}<br> ${dataset.category_04.name}`,
		rightTitle: right.map(r => r.name).join("<br />"),//`${dataset.category_01.name}<br> ${dataset.category_03.name}`,
		categoryLeft: left.map(r => r.id),//[dataset.category_02.id,dataset.category_04.id],
		categoryRight:  right.map(r => r.id), //[dataset.category_01.id, dataset.category_03.id],
		instructions: instructions,
		items: items
	})
	let categoryO1 = dataset.category_01.items.map(i => ({ ...i, answer: dataset.category_01.id}))
	let categoryO2 = dataset.category_02.items.map(i => ({ ...i, answer: dataset.category_02.id}))
	let categoryO3 = dataset.category_03.items.map(i => ({ ...i, answer: dataset.category_03.id}))
	let categoryO4 = dataset.category_04.items.map(i => ({ ...i, answer: dataset.category_04.id}))

	let block01 = combineAndSuffleArray(categoryO1, categoryO2);
	let block02 = combineAndSuffleArray(categoryO3, categoryO4);
	let block03 = combineAndSuffleArray(block01, block02);
	let block04 = combineAndSuffleArray(categoryO1, categoryO2);
	let block05 = combineAndSuffleArray(block01, block02);


	return [
	  buildBlock(
	    "BLOQUE 1",
		[dataset.category_01],
		[dataset.category_02],
		block01,
		`La clasificación de las imágenes en este bloque será con base en la pertenencia al ambiente de <strong>${dataset.category_01.name} - ${dataset.category_02.name}</strong>`
	  ),
		buildBlock("BLOQUE 2",
		  [dataset.category_03],
		  [dataset.category_04],
		  block02,
		  `Las etiquetas han cambiado. La clasificación de palabras será con base en el atributo <strong>${dataset.category_03.name} - ${dataset.category_04.name}</strong>`
		),
		buildBlock("BLOQUE 3",
		  [dataset.category_01, dataset.category_03],
		  [dataset.category_02,dataset.category_04],
		  block03,
		  "¡Atención! Ahora se muestran las 4 etiquetas de manera <strong>SIMULTÁNEA</strong>"
		),
		buildBlock("BLOQUE 4",
		  [dataset.category_02],
		  [dataset.category_01],
		  block04,
		  "Ahora las etiquetas de las categorías se han <strong>INVERTIDO</strong>"
		),
		buildBlock("BLOQUE 5",
		  [dataset.category_02,dataset.category_03],
		  [dataset.category_01,dataset.category_04],
		  block05,
		  "Ahora las etiquetas de las categorías se han ¡Atención! De nuevo se muestran las 4 etiquetas de manera <strong>SIMULTÁNEA\n</strong>"
		)
	]
}

const combineAndSuffleArray = (cat1, cat2) => {
	var shuffle = (array) => {
		var newarr=[]
		var currentIndex = array.length,
		  temporaryValue,
		  randomIndex;
		while (0 !== currentIndex) {
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex -= 1;
			temporaryValue = array[currentIndex];
			array[currentIndex] = array[randomIndex];
			newarr[currentIndex] = array[randomIndex]
			array[randomIndex] = temporaryValue;

		}

		return newarr;
	}
	var newArray = cat1.concat(cat2);
	return shuffle(newArray);
}

export const removeElementAt = (array, index) => {
	if (Array.isArray(array)) {
		return array.splice(index, 1);
	}
}

export const generateRandomCode = () => {
	var result           = '';
	var characters       = '0123456789ABCDEF';
	var charactersLength = characters.length;
	for ( var i = 0; i < 10; i++ ) {
		result += characters.charAt(Math.floor(Math.random() * charactersLength));
	}
	return result;
}
