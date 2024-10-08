import { Carousel } from "react-bootstrap";
import { Image } from "semantic-ui-react";
import "./Carrousel.scss";
import "bootstrap/dist/css/bootstrap.min.css";

export const Slider = ({ slides }: any) => {
	return (
		<Carousel fade variant="dark" indicators={false} draggable>
			{slides.map((slide: any) => (
				<Carousel.Item>
					<Image src={slide} alt="slide" centered />
				</Carousel.Item>
			))}
		</Carousel>
	);
};
