feather.replace();

tippy(".github", {
	content: "Github",
	placement: "bottom",
	theme: "clean",
	arrow: false,
});

tippy(".linkedin", {
	content: "LinkedIn",
	placement: "bottom",
	theme: "clean",
	arrow: false,
});

tippy(".mail", {
	content: "E-Mail",
	placement: "bottom",
	theme: "clean",
	arrow: false,
});

tippy(".resume", {
	content: "Resume",
	placement: "bottom",
	theme: "clean",
	arrow: false,
});

var splide = new Splide(".splide", {
	rewind: true,
});
splide.mount();

var splide2 = new Splide(".splide2", {
	speed: 1000,
	pagination: false,
	type    : 'loop',
	drag: false,
	autoplay: true,
	interval: 3000,
	perPage: 1
});
splide2.mount();
