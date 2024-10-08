import { useState, useEffect } from "react";
import { Header, Body, Footer } from ".";
import Logo from "../assets/loading.mp4";

export const Layout = () => {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 2500);
	}, []);

	const LoadingComponent = () => {
		return (
			<div className="loading">
				<img src={Logo} />
			</div>
		);
	};

	return (
		<>
			{loading ? (
				<LoadingComponent />
			) : (
				<>
					<Header />
					<Body />
					<Footer />
				</>
			)}
		</>
	);
};
