export const buildTest = (dataset) => {
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
			rightTitle: "CIUDAD",
			leftTitle: "NATURALEZA",
			categoryRight: ['category_2'],
			categoryLeft: ['category_1'],
			instructions: "La clasificación de las imágenes en este bloque será con base en la pertenencia al ambiente de <strong>NATURALEZA - CIUDAD</strong>",
			items: bloque1
		},
		{
			name: "BLOQUE 2",
			rightTitle:  "MALO",
			leftTitle: "BUENO",
			categoryRight: ['category_4'],
			categoryLeft: ['category_3'],
			instructions: "Las etiquetas han cambiado. La clasificación de palabras será con base en el atributo <strong>BUENO - MALO</strong>",
			items: bloque2
		},
		{
			name: "BLOQUE 3",
			rightTitle: "CIUDAD<br> MALO",
			leftTitle: "NATURALEZA<br> BUENO",
			categoryRight: ['category_2','category_4'],
			categoryLeft: ['category_1','category_3'],
			instructions: "¡Atención! Ahora se muestran las 4 etiquetas de manera <strong>SIMULTÁNEA</strong>",
			items: bloque3
		},
		{
			name: "BLOQUE 4",
			rightTitle: "NATURALEZA",
			leftTitle: "CIUDAD",
			categoryRight: ['category_1'],
			categoryLeft: ['category_2'],
			instructions: "Ahora las etiquetas de las categorías se han <strong>INVERTIDO</strong>",
			items: bloque4
		},
		{
			name: "BLOQUE 5",
			rightTitle: "NATURALEZA <br> MALO",
			leftTitle: "CIUDAD <br> BUENO",
			categoryRight: ['category_1','category_4'],
			categoryLeft: ['category_2','category_3'],
			instructions: "Ahora las etiquetas de las categorías se han ¡Atención! De nuevo se muestran las 4 etiquetas de manera <strong>SIMULTÁNEA\n</strong>",
			items: bloque5
		}
	]

}

export const combineCategories = (cat1, cat2) => {
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