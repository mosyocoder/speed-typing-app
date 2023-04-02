import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector } from "react-redux";
import "./App.css";
import FinishPage from "./components/FinishPage";
import Header from "./components/Header";
import Input from "./components/Input";
import Word from "./components/Word";

function App() {
	const gameStat = useSelector((state) => state.word.gameStat);
	console.log(gameStat);
	return (
		<div className="container d-flex flex-column justify-content-center mt-5 col-lg-6 col-sm-12">
			{gameStat === "finish" ? (
				<>
					<FinishPage />
				</>
			) : (
				<>
					<Header />
					<Word />
					<Input />
				</>
			)}
		</div>
	);
}

export default App;
