const form = document.querySelector(".contact__form");
const submitBtn = document.querySelector(".contact__form__submit")

const showMessage = (msg) => {
	const messageContainer = document.querySelector(".contact__message");
	const message = messageContainer.querySelector(".contact__message__text");
	message.textContent = msg;
	messageContainer.style.opacity = 100;
	setTimeout(() => {
		messageContainer.style.opacity = 0;
	}, 5000);
};

const validate = (name) => {
	const element = document.forms[0][name];
	if (!element.value) {
		element.style.borderBottom = "1px solid #ff5454";
		element.nextElementSibling.style.color = "#ff5454";
		return false;
	} else {
		element.style.borderBottom = "1px solid #888";
		element.nextElementSibling.style.color = "#fff";
		return true;
	}
};

submitBtn.addEventListener("click", (e) => {
	e.preventDefault();

	const res = ["Name", "E-Mail", "Subject", "Message"].every(validate);
	if (!res) return;

	let data = new FormData(form);
	fetch("https://formbold.com/s/9Exr6", {
		method: "post",
		body: data,
	})
		.then((res) => {
			showMessage("Your message has been submitted successfully.");
		})
		.catch((err) => {
			showMessage("Failed to submit your message. Try again later.");
		});
});

window.addEventListener(
	"scroll",
	() => {
		document.querySelector(".scroll").style.opacity = 0;
	},
	{ once: true }
);

const observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		const heading = entry.target.querySelector(`.${entry.target.className}__heading`);
		const content = entry.target.querySelector(`.${entry.target.className}__content-wrap`);
		if (entry.isIntersecting) {
			heading.classList.add("animate__animated", "animate__fadeInDown");
			content.classList.add("animate__animated", "animate__fadeInUp");
			return;
		}
	});
});

observer.observe(document.querySelector(".skills"));
observer.observe(document.querySelector(".projects"));
observer.observe(document.querySelector(".journey"));
observer.observe(document.querySelector(".contact"));
