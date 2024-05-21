import "./App.css"
import { Hero } from "./components/HeroSection/Hero"
import NavBar from "./components/NavBar/NavBar"
import { Skills } from "./components/Skills/Skills"
import { WorkExperience } from "./components/WorkExperience/WorkExperience"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
	return (
		<main>
			<NavBar/>
			<div className="container max-w-[1300px] m-auto relative lg:px-6">
				<Hero/>
				<Skills/>
				<WorkExperience/>
			</div>
		</main>
	)
}

export default App
