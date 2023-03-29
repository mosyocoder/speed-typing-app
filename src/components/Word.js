import React from "react";
import { useSelector } from "react-redux";

function Word() {
	const { words, language, darkTheme, currentWord } = useSelector((state) => state.word);
	let wordArr = [];
	if (currentWord <= 29) wordArr = words.slice(1, 31);
	else {
		wordArr = words.slice(31, 61);
	}

	return (
		<div className={`word rounded-2 mt-3 border d-flex flex-wrap ${darkTheme ? "border-light" : "border-dark"}`}>
			{wordArr.map((item, key) => (
				<span
					className={`px-1 m-1 fs-3 
                    ${item.status === "correct" ? "correctWord" : ""}
                    ${item.status === "wrong" ? "wrongWord" : ""}
                    ${(currentWord <= 29 ? key : key + 30) === currentWord ? "currentWord" : ""}`}
					key={currentWord <= 29 ? key : key + 30}>
					{language === "turkish" ? item.turkish : item.english}
				</span>
			))}
		</div>
	);
}

export default Word;
