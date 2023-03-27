import React from "react";
import { useSelector } from "react-redux";

function Word() {
	const { words, language, darkTheme, currentWord } = useSelector((state) => state.word);
	return (
		<div className={`word rounded-2 mt-3 border d-flex flex-wrap ${darkTheme ? "border-light" : "border-dark"}`}>
			{words.slice(1, 30).map((item, key) => (
				<span className={`px-1 m-1 fs-3 ${key === currentWord ? "currentWord" : ""}`} key={key}>
					{language === "turkish" ? item.turkish : item.english}
					<div>{console.log(item)}</div>
				</span>
			))}
		</div>
	);
}

export default Word;
