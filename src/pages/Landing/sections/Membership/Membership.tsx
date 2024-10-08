import { Grid, Button } from "semantic-ui-react";
import "./Membership.scss";

export const Membership = () => {
	return (
		<div className="membership-section">
			<div className="content">
				<Grid className="subcontent" textAlign="center">
					<Grid.Row className="row-content" verticalAlign="middle">
						<Grid.Column computer={2}></Grid.Column>
						<Grid.Column computer={6} mobile={14}>
							<h1 className="title">ÚNETE A PLENNIA®</h1>
							<p className="description">
								Disfruta de todos los beneficios que Plennia®
								tiene para ti
							</p>
						</Grid.Column>
						<Grid.Column computer={8} mobile={16}>
							<Button
								className="button"
								size="big"
								color="blue"
								href="https://join.plenniaglobal.com/vtorres94"
								target="_blank"
							>
								EMPRENDE
							</Button>
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</div>
		</div>
	);
};
