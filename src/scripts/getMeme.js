function getMeme() {
	var subSelect = document.getElementById("subs");
	var sub = subSelect.options[subSelect.selectedIndex].value;
	fetch(`https://meme-api.herokuapp.com/gimme/${sub}`)
		.then(function (response) {
			return response.json();
		})
		.then(function (jsonResponse) {
			if (jsonResponse.nsfw) return getMeme().then();
			document.getElementById("memeImage").src = jsonResponse.url;
			setTimeout(() => {
				scroll({
					behavior: "smooth",
					top: 1000,
				});
			}, 100);
		});
}
