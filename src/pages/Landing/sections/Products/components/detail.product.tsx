import { useState } from "react";
import { Modal, Image, Button, Icon } from "semantic-ui-react";
import { IProduct } from "../../../../../models";
import "../Products.scss";

interface IProps {
	product: IProduct;
}

export const DetailProduct = ({ product }: IProps) => {
	const [open, setOpen] = useState(false);

	return (
		<Modal
			className="product-detail-modal"
			open={open}
			onClose={() => setOpen(false)}
			trigger={
				<Image
					className="product-image"
					src={product.src}
					alt="product"
					size="medium"
					centered
					onClick={() => setOpen(true)}
				/>
			}
			style={{
				left: "auto",
				right: "auto",
				top: "auto",
				bottom: "auto",
				height: "fit-content",
				justifyContent: "center",
			}}
		>
			<Modal.Header>{product.name}</Modal.Header>
			<Modal.Content image>
				<Image size="medium" src={product.src} />
				<Modal.Description>
					<h3>{product.price}</h3>
					<p>
						{product.bennefits.map((bennefit: any) => {
							return (
								<>
									{bennefit}
									<br />
								</>
							);
						})}
					</p>
					<p>{product.comments}</p>
					<p>{product.ingredients}</p>
					<Button.Group>
						<Button
							color="green"
							href="https://shop.plenniaglobal.com/vtorres94"
							target="_blank"
						>
							<Icon name="cart" />
							Comprar
						</Button>
						<Button.Or text={"O"} />
						<Button
							color="blue"
							href="https://join.plenniaglobal.com/vtorres94"
							target="_blank"
						>
							<Icon name="money" />
							Quiero Ser Distribuidor
						</Button>
					</Button.Group>
				</Modal.Description>
			</Modal.Content>
			<Modal.Actions>
				<Button color="black" onClick={() => setOpen(false)}>
					Cerrar
				</Button>
			</Modal.Actions>
		</Modal>
	);
};
