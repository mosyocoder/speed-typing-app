import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header";
import Input from "./components/Input";
import Word from "./components/Word";

function App() {
	return (
		<div className="container d-flex flex-column justify-content-center mt-5 col-lg-6 col-sm-12">
			<Header />
			<Word />
			<Input />
		</div>
	);
}

export default App;
