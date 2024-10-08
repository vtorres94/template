import "./Info.scss";

import Logo from "../../../../assets/logo.svg";

export const Info = () => {
	return (
		<div className="info-container">
			<div className="info-links">
				<div id="sticker">
					<img src={Logo} />
				</div>
			</div>
		</div>
	);
};
