
export const buildBalancedTest = (dataset) => {
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
		{
			name: "BLOQUE 1",
			leftTitle: dataset.category_02.name,
			rightTitle: dataset.category_01.name,
			categoryLeft: [dataset.category_02.id],
			categoryRight: [dataset.category_01.id],
			instructions: "La clasificación de las imágenes en este bloque será con base en la pertenencia al ambiente de <strong>NATURALEZA - CIUDAD</strong>",
			items: block01
		},
		{
			name: "BLOQUE 2",
			leftTitle: dataset.category_04.name,
			rightTitle:  dataset.category_03.name,
			categoryLeft: [dataset.category_04.id],
			categoryRight: [dataset.category_03.id],
			instructions: "Las etiquetas han cambiado. La clasificación de palabras será con base en el atributo <strong>BUENO - MALO</strong>",
			items: block02
		},
		{
			name: "BLOQUE 3",
			leftTitle:  `${dataset.category_02.name}<br> ${dataset.category_04.name}`,
			rightTitle: `${dataset.category_01.name}<br> ${dataset.category_03.name}`,
			categoryLeft: [dataset.category_02.id,dataset.category_04.id],
			categoryRight: [dataset.category_01.id, dataset.category_03.id],
			instructions: "¡Atención! Ahora se muestran las 4 etiquetas de manera <strong>SIMULTÁNEA</strong>",
			items: block03
		},
		{
			name: "BLOQUE 4",
			rightTitle: dataset.category_02.name,
			leftTitle: dataset.category_01.name,
			categoryRight: [dataset.category_02.id],
			categoryLeft: [dataset.category_01.id],
			instructions: "Ahora las etiquetas de las categorías se han <strong>INVERTIDO</strong>",
			items: block04
		},
		{
			name: "BLOQUE 5",
			leftTitle: `${dataset.category_01.name} <br> ${dataset.category_04.name}`,
			rightTitle: `${dataset.category_02.name} <br> ${dataset.category_03.name}`,
			categoryLeft: [dataset.category_01.id,dataset.category_04.id],
			categoryRight: [dataset.category_02.id,dataset.category_03.id],
			instructions: "Ahora las etiquetas de las categorías se han ¡Atención! De nuevo se muestran las 4 etiquetas de manera <strong>SIMULTÁNEA\n</strong>",
			items: block05
		}
	]
}


export const buildCBalancedTest = (dataset) => {
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
		{
			name: "BLOQUE 1",
			leftTitle: dataset.category_02.name,
			rightTitle: dataset.category_01.name,
			categoryLeft: [dataset.category_02.id],
			categoryRight: [dataset.category_01.id],
			instructions: "La clasificación de las imágenes en este bloque será con base en la pertenencia al ambiente de <strong>NATURALEZA - CIUDAD</strong>",
			items: block01
		},
		{
			name: "BLOQUE 2",
			leftTitle: dataset.category_04.name,
			rightTitle:  dataset.category_03.name,
			categoryLeft: [dataset.category_04.id],
			categoryRight: [dataset.category_03.id],
			instructions: "Las etiquetas han cambiado. La clasificación de palabras será con base en el atributo <strong>BUENO - MALO</strong>",
			items: block02
		},
		{
			name: "BLOQUE 3",
			leftTitle:  `${dataset.category_02.name}<br> ${dataset.category_04.name}`,
			rightTitle: `${dataset.category_01.name}<br> ${dataset.category_03.name}`,
			categoryLeft: [dataset.category_02.id,dataset.category_04.id],
			categoryRight: [dataset.category_01.id, dataset.category_03.id],
			instructions: "¡Atención! Ahora se muestran las 4 etiquetas de manera <strong>SIMULTÁNEA</strong>",
			items: block03
		},
		{
			name: "BLOQUE 4",
			rightTitle: dataset.category_02.name,
			leftTitle: dataset.category_01.name,
			categoryRight: [dataset.category_02.id],
			categoryLeft: [dataset.category_01.id],
			instructions: "Ahora las etiquetas de las categorías se han <strong>INVERTIDO</strong>",
			items: block04
		},
		{
			name: "BLOQUE 5",
			leftTitle: `${dataset.category_01.name} <br> ${dataset.category_04.name}`,
			rightTitle: `${dataset.category_02.name} <br> ${dataset.category_03.name}`,
			categoryLeft: [dataset.category_01.id,dataset.category_04.id],
			categoryRight: [dataset.category_02.id,dataset.category_03.id],
			instructions: "Ahora las etiquetas de las categorías se han ¡Atención! De nuevo se muestran las 4 etiquetas de manera <strong>SIMULTÁNEA\n</strong>",
			items: block05
		}
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
/*
export const buildContraBalancedTest = (dataset) => {
	var naturaleza = dataset.category_1;
	var ciudad = dataset.category_2;
	var bueno = dataset.category_3;
	var malo = dataset.category_4;

	var bloque1 = combineCategories(naturaleza, ciudad);
	var bloque2 = combineCategories(bueno, malo);

	var bloque3 = combineCategories(bloque1, bloque2);

	var bloque4 = combineCategories(naturaleza, ciudad);

	var bloque5 = combineCategories(bloque1, bloque2);

	return [
		{
			name: "BLOQUE 1",
			leftTitle: "CIUDAD",
			rightTitle: "NATURALEZA",
			categoryLeft: ['category_1'],
			categoryRight: ['category_2'],
			instructions: "La clasificación de las imágenes en este bloque será con base en la pertenencia al ambiente de <strong>NATURALEZA - CIUDAD</strong>",
			items: bloque1
		},
		{
			name: "BLOQUE 2",
			leftTitle:  "MALO",
			rightTitle: "BUENO",
			categoryLeft: ['category_3'],
			categoryRight: ['category_4'],
			instructions: "Las etiquetas han cambiado. La clasificación de palabras será con base en el atributo <strong>BUENO - MALO</strong>",
			items: bloque2
		},
		{
			name: "BLOQUE 3",
			leftTitle: "CIUDAD<br> MALO",
			rightTitle: "NATURALEZA<br> BUENO",
			categoryLeft: ['category_1','category_3'],
			categoryRight: ['category_2','category_4'],
			instructions: "¡Atención! Ahora se muestran las 4 etiquetas de manera <strong>SIMULTÁNEA</strong>",
			items: bloque3
		},
		{
			name: "BLOQUE 4",
			leftTitle: "NATURALEZA",
			rightTitle: "CIUDAD",
			categoryLeft: ['category_2'],
			categoryRight: ['category_1'],
			instructions: "Ahora las etiquetas de las categorías se han <strong>INVERTIDO</strong>",
			items: bloque4
		},
		{
			name: "BLOQUE 5",
			leftTitle: "NATURALEZA <br> MALO",
			rightTitle: "CIUDAD <br> BUENO",
			categoryLeft: ['category_2','category_3'],
			categoryRight: ['category_1','category_4'],
			instructions: "Ahora las etiquetas de las categorías se han ¡Atención! De nuevo se muestran las 4 etiquetas de manera <strong>SIMULTÁNEA\n</strong>",
			items: bloque5
		}
	]

}

*/