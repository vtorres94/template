import { Routes, Route } from "react-router-dom";
import { Landing, PrivacyPolicy } from "../pages";

export const Router = () => {
	return (
		<Routes>
			<Route path="/" element={<Landing />} />
			<Route path="/privacy" element={<PrivacyPolicy />} />
		</Routes>
	);
};
