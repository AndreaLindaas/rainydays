function increaseItems(product) {
	const cartProduct = document.querySelector("input." + product);
	let value = cartProduct.value;

	value = Number(value) + 1;

	cartProduct.value = value;
	calculatePrice(product);
}

function decreaseItems(product) {
	const cartProduct = document.querySelector("input." + product);
	let value = cartProduct.value;

	if (value > 0) {
		value = Number(value) - 1;

		cartProduct.value = value;
		calculatePrice(product);
	}
}

function calculatePrice(product) {
	const itemPrice = document.querySelector("span." + product);
	const singelItemPrice = itemPrice.dataset.price;
	const valueItems = document.querySelector("input." + product).value;
	itemPrice.innerHTML = singelItemPrice * valueItems;

	calculateTotalPrice();
}

function calculateTotalPrice() {
	const prices = document.querySelectorAll(".price");
	let total = 0;
	for (let i = 0; i < prices.length; i++) {
		total += Number(prices[i].innerHTML);
	}

	document.querySelector(".totalPrice").innerHTML = total;
}
