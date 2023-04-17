const url = "https://empty-maze.flywheelsites.com/wp-json/wc/store/products";
const jacketList = document.querySelector(".jacket-list");
const sortHtml = document.querySelector("#sort");
let jackets = [];

async function getJackets() {
	const response = await fetch(url);
	const result = await response.json();
	jackets = result;
	showJackets();
}

function showJackets() {
	sortJackets();
	jacketList.innerHTML = "";
	for (let i = 0; i < jackets.length; i++) {
		const jacket = `<li><a href="productpage.html?id=${
			jackets[i].id
		}"><img src="${jackets[i].images[0].src}" alt="${
			jackets[i].images[0].alt
		}"/><div> <p>${jackets[i].categories[1].name}</p> <p>${
			jackets[i].name
		}</p> <p>${jackets[i].prices.price / 100},-</p></div></a></li>`;

		jacketList.innerHTML += jacket;
	}
}

function sortJackets() {
	let sort = sortHtml.value;

	if (sort === "asc") {
		jackets = jackets.sort(compare);
	} else if (sort === "desc") {
		jackets = jackets.sort(compare);
		jackets = jackets.reverse();
	}
}

sortHtml.onchange = function () {
	showJackets();
};

getJackets();

//borrowed from the internet (stackoverflow)
function compare(a, b) {
	if (a.name < b.name) {
		return -1;
	}
	if (a.name > b.name) {
		return 1;
	}
	return 0;
}
