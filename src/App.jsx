import { faGithub, faTelegram } from "@fortawesome/free-brands-svg-icons";
import Profile from "./assets/F1Ui6koWIAEdDHm.jpg";
// import Profile from "./assets/Profile.jpg";
import ProgrammingImg from "./assets/about.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import htmlLogo from "./assets/html.svg";
import tailwindLogo from "./assets/tailwind.svg";
import cssLogo from "./assets/css.svg";
import reactLogo from "./assets/react.svg";
import { faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

function Header() {
	return (
		// <header className="flex w-full max-w-7xl mx-auto p-5 px-10 md:px-0 justify-between">
		<header className="fixed top-0 left-0 bg-white shadow-md flex w-full p-6 px-12 justify-between m-0 items-center">
			<h3 className="text-3xl font-bold">SΛK</h3>
			<div>
				<ul className="flex gap-6 text-xl items-center font-semibold">
					<li>
						<a href="#">Home</a>
					</li>
					<li>
						<a href="#">About</a>
					</li>
					<li>
						<a href="#">Projects</a>
					</li>
					<li>
						<a href="#">Contact</a>
					</li>
				</ul>
			</div>
		</header>
	);
}

function Home() {
	return (
		<div className="bg-zinc-100 w-full h-screen flex items-center justify-center">
			<div className="flex flex-col-reverse md:flex-row justify-between items-center text-balance w-3/5 gap-4 mt-12">
				<div>
					<h1 className="text-6xl font-bold">Front-End Web Developer</h1>
					<p className="text-2xl mt-6 text-gray-600">
						Hi, I&rsquo;m San This Sak Khakna. A junior Front-End Developer from
						RUPP. 🎓
					</p>
					<div className="flex text-3xl text-gray-700 gap-6 mt-6">
						<a href="https://github.com/sakkhakna" target="blank">
							<FontAwesomeIcon icon={faGithub} />
						</a>
					</div>
				</div>
				<div className="rounded-full overflow-hidden flex-shrink-0">
					<img
						src={Profile}
						alt="Profile"
						className="w-64 h-64 md:w-80 md:h-80 object-cover mx-auto"
					/>
				</div>
			</div>
		</div>
	);
}

function About() {
	return (
		<div className="h-screen flex flex-col items-center p-14 md:flex-row md:p-64 justify-between gap-14 m-10">
			<img
				src={ProgrammingImg}
				alt="Programing Image"
				className="w-[450px] h-[350px] object-cover rounded-2xl"
			/>
			<div className="flex flex-col gap-4 items-center justify-center text-pretty">
				<h3 className="text-3xl font-bold text-blue-600 gap-4">About me</h3>
				<p className="text-gray-600">
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis
					quasi facilis magnam ratione excepturi fugit, sequi tempore optio illo
					dolorem mollitia repellendus quo adipisci dolore enim sint harum
					repellat aliquid!
				</p>
				<h3 className="text-3xl font-bold">Tech Stack</h3>
				<div className="flex gap-4">
					<img src={htmlLogo} alt="HTML Logo" className="w-10 h-10" />
					<img src={cssLogo} alt="CSS Logo" className="w-10 h-10" />
					<img src={reactLogo} alt="React Logo" className="w-10 h-10" />
					<img
						src={tailwindLogo}
						alt="Tailwind CSS Logo"
						className="w-10 h-10"
					/>
				</div>
			</div>
		</div>
	);
}

function Projects() {
	return (
		<div className="w-full bg-zinc-100 p-[180px]">
			<p className="text-3xl font-bold text-center">
				Projects comming soon... 💻
			</p>
		</div>
	);
}

function Contact() {
	return (
		// <div className=" p-[100px] ml-[300px]">
		<div className="max-w-7xl gap-4 p-4 h-[300px] mx-auto">
			<h3 className="text-3xl font-bold text-blue-600">Contact</h3>
			<div className="flex flex-col mt-6 gap-6">
				<div className="flex items-center flex-shrink-0">
					<FontAwesomeIcon
						icon={faPhone}
						className="border rounded-full p-3 shadow-md w-7 h-7  mr-2"
					/>
					<p className="text-xl font-semibold text-gray-500 mr-[100px]">
						+855 10 270090
					</p>

					<FontAwesomeIcon
						icon={faEnvelope}
						className="border rounded-full p-3 shadow-md w-7 h-7  mr-2"
					/>
					<p className="text-xl font-semibold text-gray-500">
						sthissakkhakna@gmail.com
					</p>
				</div>
				<div className="flex items-center ">
					<FontAwesomeIcon
						icon={faTelegram}
						className="border rounded-full p-3 shadow-md w-7 h-7  mr-2"
					/>
					<p className="text-xl font-semibold text-gray-500 mr-[120px]">
						@sakkkhakna
					</p>

					<FontAwesomeIcon
						icon={faLocationDot}
						className="border rounded-full p-3 shadow-md w-7 h-7 mr-2 "
					/>
					<p className="text-xl font-semibold text-gray-500">
						Phnom Penh, Cambodia
					</p>
				</div>
			</div>
		</div>
		// </div>
	);
}

function Footer() {
	return (
		<div className="bg-gray-800 p-10 ">
			<p className="text-white text-xl font-bold pl-[250px] max-w-7xl">
				Copyright &copy; 2024. All rights are reserved{" "}
			</p>
		</div>
	);
}

function App() {
	return (
		<div>
			<Header />
			<Home />
			<About />
			<Projects />
			<Contact />
			<Footer />
		</div>
	);
}

export default App;
