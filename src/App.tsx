import { Layout } from "./layout";
import { store } from "./store";
import { Provider } from "react-redux";
import "./App.scss";

const App = () => {
	return (
		<div className="App">
			<Provider store={store}>
				<Layout />
			</Provider>
		</div>
	);
};

export default App;
