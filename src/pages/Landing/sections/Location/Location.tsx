import "./Location.scss";

import { useSelector } from "react-redux";
import { RootState } from "../../../../store";

export const Location = () => {
	const { map } = useSelector(
		(state: RootState) => state.franchise.franchise
	);
	return (
		<>
			<div className="location-title">
				<h1>VISITANOS</h1>
			</div>
			<div className="location">
				<iframe
					className="location-map"
					src={map}
					style={{ border: 0 }}
					loading="lazy"
				></iframe>
			</div>
		</>
	);
};
