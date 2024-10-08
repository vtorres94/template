import "./Team.scss";

import { Slider } from "..";

export const Team = () => {
	return (
		<>
			<div className="team-title">
				<h1>CONOCE AL EQUIPO</h1>
			</div>
			<div className="team-members-container">
				<Slider />
			</div>
		</>
	);
};
