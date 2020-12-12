window.addEventListener('scroll', function(evt) {
  //let transparencia = window.scrollY / window.innerHeight * 2
	let $desaparecer = window.scrollY;
	if($desaparecer > 750){
		let div = document.querySelector(".presentacion");
		let tech = document.querySelector(".techPresentacion");
		if(div)div.className = "hidden";
		if(tech)tech.className = "borderHidden";
	}
});