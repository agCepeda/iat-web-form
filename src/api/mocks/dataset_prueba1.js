export const datCBalContent = () => {
	const itemDatContent = (item) => `"${item.value}"\n`
	const categoryDatContent = (cat) => {
		return `"${cat.name}"\n${cat.items.map(itemDatContent).join()}`;
	}

	return cbalanced.map(categoryDatContent).join();
}
export const datBalContent = () => {
	const itemDatContent = (item) => `"${item.value}"\n`
	const categoryDatContent = (cat) => {
		return `"${cat.name}"\n${cat.items.map(itemDatContent).join("")}\n`;
	}

	return balanced.map(categoryDatContent).join("");
}

export const balanced = [
	{
		name: "CIUDAD",
		items: [
			{type: "image", value: "B1.jpg", answer: "category_2"},
			{type: "image", value: "B2.jpg", answer: "category_2"},
			{type: "image", value: "B3.jpg", answer: "category_2"},
			{type: "image", value: "B4.jpg", answer: "category_2"},
			{type: "image", value: "B5.jpg", answer: "category_2"},
			{type: "image", value: "B6.jpg", answer: "category_2"},
		]
	},
	{
		name: "NATURALEZA",
		items: [
			{type: "image", value: "A1.jpg", answer: "category_1"},
			{type: "image", value: "A2.jpg", answer: "category_1"},
			{type: "image", value: "A3.jpg", answer: "category_1"},
			{type: "image", value: "A4.jpg", answer: "category_1"},
			{type: "image", value: "A5.jpg", answer: "category_1"},
			{type: "image", value: "A6.jpg", answer: "category_1"},
		]
	},
	{
		name: "MALO",
		items: [
			{type: "word", value: "MIEDO", answer: "category_4"},
			{type: "word", value: "TRISTEZA", answer: "category_4"},
			{type: "word", value: "ODIO", answer: "category_4"},
			{type: "word", value: "TEMOR", answer: "category_4"},
			{type: "word", value: "FASTIDIO", answer: "category_4"},
			{type: "word", value: "DESPRECIO", answer: "category_4"}
		]
	},
	{
		name: "BUENO",
		items: [
			{type: "word", value: "AMOR", answer: "category_3"},
			{type: "word", value: "SERENIDAD", answer: "category_3"},
			{type: "word", value: "OPTIMISMO", answer: "category_3"},
			{type: "word", value: "ÉXITO", answer: "category_3"},
			{type: "word", value: "FELICIDAD", answer: "category_3"},
			{type: "word", value: "PAZ", answer: "category_3"}
		]
	}
]

export const cbalanced = [
	{
		name: "NATURALEZA",
		items: [
			{type: "image", value: "A1.jpg", answer: "category_1"},
			{type: "image", value: "A2.jpg", answer: "category_1"},
			{type: "image", value: "A3.jpg", answer: "category_1"},
			{type: "image", value: "A4.jpg", answer: "category_1"},
			{type: "image", value: "A5.jpg", answer: "category_1"},
			{type: "image", value: "A6.jpg", answer: "category_1"},
		]
	},
	{
		name: "CIUDAD",
		items: [
			{type: "image", value: "B1.jpg", answer: "category_2"},
			{type: "image", value: "B2.jpg", answer: "category_2"},
			{type: "image", value: "B3.jpg", answer: "category_2"},
			{type: "image", value: "B4.jpg", answer: "category_2"},
			{type: "image", value: "B5.jpg", answer: "category_2"},
			{type: "image", value: "B6.jpg", answer: "category_2"},
		]
	},
	{
		name: "BUENO",
		items: [
			{type: "word", value: "AMOR", answer: "category_3"},
			{type: "word", value: "SERENIDAD", answer: "category_3"},
			{type: "word", value: "OPTIMISMO", answer: "category_3"},
			{type: "word", value: "ÉXITO", answer: "category_3"},
			{type: "word", value: "FELICIDAD", answer: "category_3"},
			{type: "word", value: "PAZ", answer: "category_3"}
		]
	},
	{
		name: "MALO",
		items: [
			{type: "word", value: "MIEDO", answer: "category_4"},
			{type: "word", value: "TRISTEZA", answer: "category_4"},
			{type: "word", value: "ODIO", answer: "category_4"},
			{type: "word", value: "TEMOR", answer: "category_4"},
			{type: "word", value: "FASTIDIO", answer: "category_4"},
			{type: "word", value: "DESPRECIO", answer: "category_4"}
		]
	}
]

export default {
	category_1: [
		{ type: "image", value: "A1.jpg", answer: "category_1" },
		{ type: "image", value: "A2.jpg", answer: "category_1" },
		{ type: "image", value: "A3.jpg", answer: "category_1" },
		{ type: "image", value: "A4.jpg", answer: "category_1" },
		{ type: "image", value: "A5.jpg", answer: "category_1" },
		{ type: "image", value: "A6.jpg", answer: "category_1" },
	],
	category_2: [
		{ type: "image", value: "B1.jpg", answer: "category_2" },
		{ type: "image", value: "B2.jpg", answer: "category_2" },
		{ type: "image", value: "B3.jpg", answer: "category_2" },
		{ type: "image", value: "B4.jpg", answer: "category_2" },
		{ type: "image", value: "B5.jpg", answer: "category_2" },
		{ type: "image", value: "B6.jpg", answer: "category_2" },
	],
	category_3: [
		{ type: "word", value: "AMOR", answer: "category_3" },
		{ type: "word", value: "SERENIDAD", answer: "category_3" },
		{ type: "word", value: "OPTIMISMO", answer: "category_3" },
		{ type: "word", value: "ÉXITO", answer: "category_3" },
		{ type: "word", value: "FELICIDAD", answer: "category_3" },
		{ type: "word", value: "PAZ", answer: "category_3" }
	],
	category_4: [
		{ type: "word", value: "MIEDO", answer: "category_4" },
		{ type: "word", value: "TRISTEZA", answer: "category_4" },
		{ type: "word", value: "ODIO", answer: "category_4" },
		{ type: "word", value: "TEMOR", answer: "category_4" },
		{ type: "word", value: "FASTIDIO", answer: "category_4" },
		{ type: "word", value: "DESPRECIO", answer: "category_4" }
	]
}
