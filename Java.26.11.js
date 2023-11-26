const link = 'https://my-json-server.typicode.com/Roborofler/nd1800/db'

$.ajax(link, {
	success: function (responce) {
		console.log(responce.products)
		Market(responce)
	}
})

function Market(responce){
	for(let i = 0; i < 6; i++){
		$(".grid").append(`<div class="grid_item">
			<p class="name">${responce.products[i].name}</p>
			<img class="img" src="${responce.products[i].photo_url}">
			<p class="price">Price:${responce.products[i].price}</p>
			<p class="description">Description:${responce.products[i].description}</p>
			<button class="button">Buy</button>
			</div>`)
	}
}