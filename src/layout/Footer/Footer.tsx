import { Grid, Image } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/logo.png";
import "./Footer.scss";

export const Footer = () => {
	const navigate = useNavigate();

	return (
		<div className="footer-container">
			<Grid>
				<Grid.Row>
					<Image
						className="pointer"
						onClick={() => navigate("/")}
						src={Logo}
						size="small"
						centered
					/>
				</Grid.Row>
				<Grid.Row>
					<Grid.Column computer={16} mobile={16}>
						<h5
							className="policy pointer"
							onClick={() => navigate("/privacy")}
						>
							Política de Privacidad
						</h5>
					</Grid.Column>
				</Grid.Row>
			</Grid>
		</div>
	);
};
