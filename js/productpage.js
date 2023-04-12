const buyButton = document.querySelector(".buy-button");
const modal = document.querySelector(".modal");
const closeModal = document.querySelector(".close");
var img = document.querySelector(".img-productpage");
var modalImg = document.querySelector(".modal-img");

const url = "https://empty-maze.flywheelsites.com/wp-json/wc/store/products/";

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

async function getJackets() {
	const response = await fetch(url);
	const result = await response.json();
	showJackets(result);
}
function showJackets(result) {
	for (let i = 0; i < result.length; i++) {}
}
