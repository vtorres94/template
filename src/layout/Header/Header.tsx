import { Button, Grid, Image, Icon } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./Header.scss";

export const Header = () => {
	const navigator = useNavigate();
	return (
		<Grid className="header">
			<Grid.Row className="hidden header-top">
				<Grid.Column computer={16} mobile={16}>
					<Button
						floated="right"
						className="login-btn"
						href="https://wa.me/5214494007844?text=Hola%20quiero%20ser%20distribuidor%20autorizado%20de%20plennia"
						target="_blank"
					>
						<Icon name="whatsapp" />
						INFO
					</Button>
					<h2>Live healthy, live happy</h2>
				</Grid.Column>
			</Grid.Row>
			<Grid.Row verticalAlign="middle" className="header-bottom">
				<Grid.Column computer={8} mobile={16}>
					<div className="header-logo" onClick={() => navigator("/")}>
						<Image src={logo} alt="plennia" />
					</div>
				</Grid.Column>
			</Grid.Row>
		</Grid>
	);
};
