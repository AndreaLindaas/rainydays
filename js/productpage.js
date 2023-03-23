const buyButton = document.querySelector(".buy-button");
const modal = document.querySelector(".modal");
const closeModal = document.querySelector(".close");
var img = document.querySelector(".img-productpage");
var modalImg = document.querySelector(".modal-img");

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
