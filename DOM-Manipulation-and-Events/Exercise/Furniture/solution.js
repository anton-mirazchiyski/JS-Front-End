function solve() {
	const tableBodyElement = document.querySelector('table > tbody');
	const firstTextareaElement = document.getElementsByTagName('textarea')[0];
	const secondTextareaElement = document.getElementsByTagName('textarea')[1];
	const buttonElements = document.getElementsByTagName('button');

	const [generateButtonElement, buyButtonElement] = buttonElements;

	generateButtonElement.addEventListener('click', () => {
		const furnitureObjects = JSON.parse(firstTextareaElement.value);
		let tableRowElement;

		for (const furnitureObject of furnitureObjects) {
			tableRowElement = document.createElement('tr');
			const rowCellsCount = 5;
			const objectValues = Object.values(furnitureObject);

			for (let i = 0; i <= rowCellsCount; i++) {
				const tableDataElement = document.createElement('td');

				if (i === 0) {
					const imageElement = document.createElement('img');
					imageElement.setAttribute('src', furnitureObject.img);
					tableDataElement.appendChild(imageElement);
				} else if (i === rowCellsCount - 1) {
					const inputElement = document.createElement('input');
					inputElement.setAttribute('type', 'checkbox');
					tableDataElement.appendChild(inputElement);
				} else {
					const paragraphElement = document.createElement('p');
					paragraphElement.textContent = objectValues[i];
					tableDataElement.appendChild(paragraphElement);
				}
				tableRowElement.appendChild(tableDataElement);
			}

			tableBodyElement.appendChild(tableRowElement);
		}
	});

	buyButtonElement.addEventListener('click', () => {
		const tableRowElements = tableBodyElement.getElementsByTagName('tr');
		const checkedTableRowElements = Array.from(tableRowElements).filter(rowElement => rowElement.querySelector('input[type=checkbox]').checked);

		const boughtFurniture = [];
		let totalPrice = 0;
		let totalDecorationFactor = 0;

		checkedTableRowElements.forEach(rowElement => {
			const furnitureName = rowElement.querySelector('td:nth-child(2)').textContent;
			boughtFurniture.push(furnitureName);

			const furniturePrice = Number(rowElement.querySelector('td:nth-child(3)').textContent);
			totalPrice += furniturePrice;

			const decorationFactor = Number(rowElement.querySelector('td:nth-child(4)').textContent);
			totalDecorationFactor += decorationFactor;
		});

		secondTextareaElement.value = `Bought furniture: ${boughtFurniture.join(', ')}\n`;
		secondTextareaElement.value += `Total price: ${totalPrice.toFixed(2)}\n`;
		secondTextareaElement.value += `Average decoration factor: ${totalDecorationFactor / checkedTableRowElements.length}`;
	});
}
