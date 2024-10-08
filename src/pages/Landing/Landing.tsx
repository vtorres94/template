import { Slider, Products } from "./sections";
import { Membership } from "./sections";

export const Landing = () => {
	const slides = [
		"/assets/plennia/banner_1.jpg",
		"/assets/plennia/banner_2.jpg",
		"/assets/plennia/banner_3.jpg",
	];
	return (
		<div className="hidden">
			<Slider slides={slides} />
			<Products />
			<Membership />
		</div>
	);
};
