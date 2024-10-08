import { DetailProduct } from "./components/detail.product";
import { Grid } from "semantic-ui-react";
import { Carousel } from "react-bootstrap";
import PRODUCTS from "./data/products.json";
import "./Products.scss";
import "bootstrap/dist/css/bootstrap.min.css";

export const Products = () => {
	const { products } = PRODUCTS;

	return (
		<Grid className="products-cointainer">
			<Grid.Row textAlign="center">
				<Carousel variant="dark" indicators={false} draggable>
					{products.map((product: any) => {
						return (
							<Carousel.Item>
								<DetailProduct product={product} />
								<Carousel.Caption>
									<h3>{product.name}</h3>
								</Carousel.Caption>
							</Carousel.Item>
						);
					})}
				</Carousel>
			</Grid.Row>
		</Grid>
	);
};
