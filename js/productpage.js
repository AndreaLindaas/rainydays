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
	showJacket(result);
}

function showJacket(jacket) {
	showMainImage(jacket);
	showText(jacket);
	showDescription(jacket);
	getRelatedJackets(jacket);
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
	document.querySelector(".description").innerHTML = jacket.description;
}

async function getRelatedJackets(jacket) {
	const relatedProducts = document.querySelector(".img-other");
	debugger;
	for (let i = 0; i < jacket.attributes.length; i++) {
		if (jacket.attributes[i].name === "related") {
			for (let j = 0; j < jacket.attributes[i].terms.length; j++) {
				let url =
					"https://empty-maze.flywheelsites.com/wp-json/wc/store/products/" +
					jacket.attributes[i].terms[j].name;

				let response = await fetch(url);
				let result = await response.json();

				relatedProducts.innerHTML += `<a href="productpage.html?id=${jacket.attributes[i].terms[j].name}"><img src="${result.images[0].thumbnail}"/></a>`;
			}
		}
	}
}

getJacket();
