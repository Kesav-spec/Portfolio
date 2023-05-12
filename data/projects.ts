export const projects: Project[] = [
	{
		type: "Personal Project",
		title: "Hoshi",
		imagesCount: 15,
		tech: [
			"Next.js",
			"React",
			"Typescript",
			"TailwindCSS",
			"Python",
			"FastAPI",
			"MongoDB",
			"Supabase",
		],
		previewLink: "https://hoshi.ga",
		sourceLink: "https://github.com/nishanthrj/Hoshi",
		description: [
			"Built a comprehensive web platform for anime and manga enthusiasts, delivering information on over 22,000 anime and 60,000 manga titles.",
			"Developed a recommendation system using SBERT, which analyzes each title's synopsis, genre, and tags to recommend similar media. While a generic TF-IDF based system will only achieve accuracy of about 70 - 90%, this system achieves an accuracy rate of 95.4% ",
			"Utilized reliable sources such as MyAnimeList, AniList, and Kitsu to collect data, ensuring that users get accurate and relevant information on each title.",
			"Built the platform to support multiple search filters, such as genre, tags, and status, making it easy for users to find titles that match their preferences.",
			"Created a user interface that is sleek, intuitive to use, and designed to work across all platforms and devices, ensuring a seamless user experience.",
			"Optimized the platform's performance, achieving over 90 points on Lighthouse tests for accessibility, performance, SEO, and best practices.",
		],
	},
	{
		type: "Personal Project",
		title: "Realest",
		imagesCount: 10,
		tech: ["Python", "Django", "PostgreSQL", "HTML", "CSS", "Javascript", "Bootstrap"],
		previewLink: "https://realest.up.railway.app/",
		sourceLink: "https://github.com/nishanthrj/Realest",
		description: [
			"Built a real estate website that allows customers to search for properties based on their preferences.",
			"Implemented a search panel where users can filter their search based on various criteria such as the number of bedrooms, city, state, price and more.",
			"Created a dedicated page for each property where all of the property's details are posted along with pictures of the property.",
			"Added support to let users send enquiries to the realtor directly from the website (currently disabled).",
			"Implemented a user dashboard to allow users manage their enquiries.",
			"The website also includes an admin dashboard where admins can add new realtors and properties easily.",
		],
	},
	{
		type: "Personal Project",
		title: "Handwritten Digit Recognition",
		imagesCount: 3,
		tech: ["Python", "Flask", "Tensorflow", "IBM Cloud", "HTML", "SCSS", "Javascript"],
		previewLink: null,
		sourceLink: "https://github.com/nishanthrj/Handwritten-Digit-Recognition",
		description: [
			"Created a web application that uses a convolutional neural network to analyze and detect handwritten digits.",
			"Users can upload an image of a handwritten digit for analysis, and they will be given a prediction of the digit along with the probability of other digits.",
			"Used the MNIST dataset, which is a widely used benchmark dataset for handwritten digit recognition.",
			"Preprocessed images before feeding them into the model to improve model performance and reduce overfitting.",
			"The model achieves 99.14% training accuracy and 97.76% testing accuracy.",
			"The model is deployed on IBM Cloud, which can be accessed by the application via IBM's API",
			"The web application offers a simple and user-friendly interface that makes it simple to use for anyone, regardless of technical experience.",
		],
	},
	{
		type: "Personal Project",
		title: "Forest Fire Detection",
		imagesCount: 3,
		tech: ["Python", "Tensorflow", "OpenCV", "Twilio"],
		previewLink: null,
		sourceLink: "https://github.com/nishanthrj/Forest-Fire-Detection",
		description: [
			"Developed a system to help prevent major forest fires, which can cause extensive damage to the environment and put human lives at risk.",
			"The system uses a convolutional neural network to detect fires in real-time.",
			"The system can detect forest fires with 93.3% accuracy.",
			"Integrated Twilio messaging service into the system to send immediate alerts to the user when a fire is detected.",
			"The system is highly scalable and can handle multiple cameras and videos to monitor large areas of forest in real-time.",
		],
	},
];
