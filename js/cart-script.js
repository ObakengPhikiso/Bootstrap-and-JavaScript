(function () {
	const cartBtn = document.querySelectorAll(".bottom-wrap");
	cartBtn.forEach(function(btn) {
		btn.addEventListener('click', function(event) {
		if (event.target.parentElement.classList.contains('.bottom-wrap')) {
			console.log(event.target.parentElement.previousElementSibling.src);
			
		}			
		}) 
	})	
})();