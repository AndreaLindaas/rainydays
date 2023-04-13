const buyButton = document.querySelector(".buy-button");
const modal = document.querySelector(".modal");
const closeModal = document.querySelector(".close");
var img = document.querySelector(".img-productpage");
var modalImg = document.querySelector(".modal-img");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const url =
	"https://empty-maze.flywheelsites.com/wp-json/wc/store/products/" + id;
const image = document.querySelector(".image-cont");

img.onclick = function () {
	modal.style.display = "block";
	modalImg.src = this.src;
	captionText.innerHTML = this.alt;
};

closeModal.onclick = function () {
	modal.style.display = "none";
};

buyButton.onclick = function () {
	alert("The product is added to cart");
};

async function getJacket() {
	const response = await fetch(url);
	const result = await response.json();
	console.log(url);
	showJacket(result);
}

function showJacket(jacket) {
	showMainImage(jacket);
	showText(jacket);
	showDescription(jacket);
}

function showMainImage(jacket) {
	const maninImage = (document.querySelector(".img-productpage").src =
		jacket.images[0].src);
}
function showText(jacket) {
	const namePrice = document.querySelector(".name-price");
	const text = `<h1>${jacket.name}</h1><h2>${
		jacket.categories[1].name
	}</h2><h2 class="price">${jacket.prices.price / 100},-</h2>`;
	namePrice.innerHTML = text;
}
function showDescription(jacket) {
	const description = (document.querySelector(".description").innerHTML =
		jacket.description);
}

getJacket();
