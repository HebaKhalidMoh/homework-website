
const navSlide = () => {
	const burger = document.querySelector(".burger");
	const nav = document.querySelector(".nav-items");
	const navItems = document.querySelectorAll(".nav-items li");
  
	burger.addEventListener("click", () => {
	  nav.classList.toggle("nav-active");
  

	  if (nav.classList.contains("nav-active")) {
		nav.style.animation = `navSlide 0.5s forwards`;
	  } else {
		nav.style.animation = `navSlideOut 0.5s`;
	  }
  

	  navItems.forEach((item, index) => {
		if (item.style.animation) {
		  item.style.animation = ``;
		} else {
		  item.style.animation = `navFade 0.5s ${index / 5 + 0.5}s ease forwards`;
		}
	  });
  
	 
	  burger.classList.toggle("toggle");
	});
  };
  
  navSlide();