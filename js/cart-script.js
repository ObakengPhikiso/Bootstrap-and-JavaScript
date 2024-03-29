(function () {
	const cartInfo = document.getElementById("cart-info");
	const cart = document.getElementById("cart");

	cartInfo.addEventListener("click", function () {
		cart.classList.toggle("show-cart");
	});
})();

(function () {
	const cartBtn = document.querySelectorAll(".store-item-icon");
	cartBtn.forEach(function (btn) {
		btn.addEventListener('click', function (event) {
			if (event.target.parentElement.classList.contains('store-item-icon')) {
				const image = event.target.parentElement.previousElementSibling.src;
				const item = {};
				item.img = image;

				let name = event.target.parentElement.parentElement.nextElementSibling.children[0].children[0].textContent;
				item.name = name;
				let price = event.target.parentElement.parentElement.nextElementSibling.children[0].children[1].textContent;
				let finalPrice = price.slice(1).trim();
				item.price = finalPrice;
				
				let items = [];
				items.push(item);
				localStorage.setItem("items",JSON.stringify(items));
				/* Create item element in the cart */

				const cartItem = document.createElement("div");
				cartItem.classList.add(
					"cart-item",
					"d-flex",
					"justify-content-between",
					"text-capitalize",
					"my-3"
				);

				cartItem.innerHTML = ` 
			<img src="${item.img}" height="80" width="80" class="img-fluid rounded-circle" id="item-img" alt="">
			<div class="item-text">
			  <p id="cart-item-title" class="font-weight-bold mb-0">${item.name}</p>
			  <span>R</span>
			  <span id="cart-item-price" class="cart-item-price" class="mb-0">${item.price}</span>
			</div>
			<a href="#" id='cart-item-remove' class="cart-item-remove">
			  <i class="fa fa-trash fa-2x"></i>
			</a>
			`;
				/* Select cart */
				const cart = document.getElementById("cart");
				const total = document.querySelector(".cart-total-container");

				cart.insertBefore(cartItem, total);
				alert("Added to cart");
				showTotals();
			}
		});
	});

	/* Show totals */
	function showTotals() {
		const total = [];
		const items = document.querySelectorAll('.cart-item-price');

		items.forEach(function (item) {
			total.push(parseFloat(item.textContent));
		});

		const totalMoney = total.reduce(function (total, item) {
			total += item;
			return total;
		}, 0);

		const finalMoney = totalMoney.toFixed(2);

		document.getElementById("cart-total").textContent = finalMoney;
		document.querySelector(".item-total").textContent = finalMoney;
		document.getElementById("item-count").textContent = total.length;

	}
})();