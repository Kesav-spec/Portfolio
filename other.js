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

var splide3 = new Splide(".splide3", {
	speed: 1000,
	pagination: false,
	type: 'loop',
	drag: false,
	autoplay: true,
	interval: 3000,
	perPage: 1
});
splide3.mount();

var splide4 = new Splide(".splide4", {
	speed: 1000,
	pagination: false,
	type: 'loop',
	drag: false,
	autoplay: true,
	interval: 3000,
	perPage: 1
});
splide4.mount();

var splide5 = new Splide(".splide5", {
	speed: 1000,
	pagination: false,
	type: 'loop',
	drag: false,
	autoplay: true,
	interval: 3000,
	perPage: 1
});
splide5.mount();

