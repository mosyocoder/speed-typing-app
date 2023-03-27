import React from "react";
import { FormSelect, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { changeLang, darkTheme } from "../redux/WordSlice";

function Header() {
	const dispatch = useDispatch();
	const lang = useSelector((state) => state.word.language);
	const theme = useSelector((state) => state.word.darkTheme);

	const handleSelect = (e) => {
		if (e === "1") {
			dispatch(changeLang("turkish"));
		} else {
			dispatch(changeLang("english"));
		}
	};

	const handleClick = () => {
		document.documentElement.setAttribute("data-theme", theme ? "light" : "dark");
		dispatch(darkTheme());
	};

	return (
		<div className="d-flex col-12 align-item-center header h-100 rounded-2">
			<FormSelect className="col-3 h-75 text-center my-auto" onChange={(e) => handleSelect(e.target.value)}>
				<option value="1">{lang === "turkish" ? "Türkçe" : "Turkish"}</option>
				<option value="2">{lang === "turkish" ? "İngilizce" : "English"}</option>
			</FormSelect>
			<p className="fs-3 col-7 text-center my-auto font-weight-bold">{lang === "turkish" ? "Klavyede ne kadar hızlısın ?" : "How fast are you at the keyboard?"}</p>
			<Button onClick={handleClick} className={`col-2 ${theme ? "btn-outline-light" : "btn-outline-dark"}`}>
				{theme ? "Light Mode" : "Dark Mode"}
			</Button>
		</div>
	);
}

export default Header;
