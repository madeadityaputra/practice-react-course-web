import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import KelasPage from "./pages/KelasPage";
import TestimonialPage from "./pages/TestimonialPage";
import SyratKetentuan from "./pages/SyratKetentuan";
import FaqPage from "./pages/FaqPage";
import FooterComponent from "./components/FooterComponent";
import NavbarComponent from "./components/NavbarComponent";

function App() {
	return (
		<div>
			<NavbarComponent />

			<Routes>
				<Route path='/' Component={HomePage} />
				<Route path='/kelas' Component={KelasPage} />
				<Route path='/testimonial' Component={TestimonialPage} />
				<Route path='/faq' Component={FaqPage} />
				<Route path='/syaratketentuan' Component={SyratKetentuan} />
			</Routes>

			<FooterComponent />
		</div>
	);
}

export default App;
