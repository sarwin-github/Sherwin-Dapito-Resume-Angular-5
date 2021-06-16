interface PortfolioItems{
	image: string,
	title: string,
	description: string,
	link: string,
	modal: string
}

export class PortfolioDB{
	public portfolio_items: PortfolioItems[] = [
		{
			image: "/assets/images/moskenes-1.jpg",
			title: "Moskenes.io",
			description: "An Asset Management Web Application that allows users or companies to create Scenario Planning (Top-down and Bottom-up Planning) for retail subcategories and Retail store. It was created using Angular 8.",
			link: "http://gmail.moskenes.io/company/dashboard/overview",
			modal: "moskenesModal"
		},

		{
			image: "/assets/images/travel-1.jpg",
			title: "Ease Travel Service",
			description: "A one-stop shop for travel in Africa, to bring together in a single application the best service providers in the field of travel, tourism and leisure: Air and land transport, Accommodation, Tourist and cultural activities, Insurance travel, Tourist and Economic Guide. Created using angular.",
			link: "https://ease-ts.com",
			modal: "travelModal"
		},
		{
			image: "/assets/images/brandtool.jpg",
			title: "The Brand Tool",
			description: "A Social Media and Domain management web application that allow a user to search for brand name or username availability across multiple social media platforms and domain. If the target domain or social media is available a user also has options to register to it with just one click. This app was created using the MEAN stack.",
			link: "https://thebrandtool.com",
			modal: "brandtoolModal"
		},
		{
			image: "/assets/images/minerva_1.jpg",
			title: "Minerva Platform IO",
			description: `Implemented Frontend design based on a wireframe given. It is a frontend MVP of a data mining app <a href="https://mnrva.io" target="_blank">(https://mnrva.io)</a>. The app was created using Angular 6, TypeScript, and RxJS.`,
			link: "http://minerva-platform.herokuapp.com",
			modal: "minervaModal"
		},
		{
			image: "/assets/images/restaurant.jpg",
			title: "Kamayan Sa Palaisdaan PH",
			description: "A Sample Restaurant Web App for Kamayan sa Palaisdaan Restaurant, Hotel and Resort where you can check their menu, hotel prices, services and other cool stuff. Created using Angular 6 and Typescript. ",
			link: "https://kamayan-sa-palaisdaan-ph.herokuapp.com",
			modal: "restaurantAppModal"
		},
		{
			image: "/assets/images/fitness-market.jpg",
			title: "Fitness Market App",
			description: "A fitness market web application created using Node JS, Express, MongoDB, Embedded JavaScript (EJS), Bootstrap 4, Wordpress API, Session Based authentication using passport, and JQuery. Fitness market app offer services such as promoting fitness center and fitness professional or trainer including classes booking and fitness centers membership.",
			link: "https://entrenami.herokuapp.com",
			modal: "fitnessModal"
		},
		{
			image: "/assets/images/dentistry.jpg",
			title: "Dentistry Web App with Booking Calendar",
			description: "A sample dentistry website app with booking calendar using FullCalendar api, Jquery, Node JS, MongoDB, Bootstrap 4 and Embedded JavaScript (EJS). This dentistry website app is a sample booking app using full calendar (authentication hasn't been implemented yet for testing).",
			link: "https://dentistry-app.herokuapp.com",
			modal: "dentistryModal"
		},
		{
			image: "/assets/images/photography2.jpg",
			title: "Photography Website",
			description: "A sample photography blog website created using Node JS, Embedded JavaScript (EJS), Bootstrap 4 and JQuery. This photography website showcases the skill and portfolio of the photographer.",
			link: "https://zaspix.herokuapp.com",
			modal: "photographyModal"
		},
		{
			image: "/assets/images/weatzene.jpg",
			title: "Weather and Timezone App",
			description: "A Weather and Timezone application where you can check the current weather (OpenweathermapAPI) and timezone(timezoneapi.io) based on country and city. It also uses Google map API for geolocation. It was created using Angular 6 and typescript.",
			link: "https://weather-ng.herokuapp.com",
			modal: "weatzeneModal"
		},
		{
			image: "/assets/images/company.jpg",
			title: "Company Website",
			description: "A sample professional company website created using Node JS, Embedded JavaScript (EJS), Bootstrap 4 and JQuery. ",
			link: "https://company-web-solutions.herokuapp.com",
			modal: "companyweb"
		}
	]


}

