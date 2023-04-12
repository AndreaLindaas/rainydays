const url = "https://empty-maze.flywheelsites.com/wp-json/wc/store/products";
const jacketList = document.querySelector(".jacket-list");

async function getJackets() {
	const response = await fetch(url);
	const result = await response.json();
	showJackets(result);
}

function showJackets(result) {
	for (let i = 0; i < result.length; i++) {
		const jacket = `<li><a href="productpage.html?id=${
			result[i].id
		}"><img src="${result[i].images[0].src}" alt="${
			result[i].images[0].alt
		}"/><div> <p>${result[i].categories[1].name}</p> <p>${
			result[i].name
		}</p> <p>${result[i].prices.price / 100},-</p></div></a></li>`;

		jacketList.innerHTML += jacket;
	}
}

getJackets();

{
	/* <ul class="jacket-list">
				<li>
					<a href="productpage.html"
						><img
							src="images/product/jacket1.jpg"
							alt=" green Fleece jacket"
						/>
						<div>
							<p>Rainydays Collection</p>
							<p>Fleecejacket</p>
							<p class="price">only 799,-</p>
						</div></a
					>
				</li> */
}
