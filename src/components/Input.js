import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeInputText, currentWordIncrease, wordStatus } from "../redux/WordSlice";

function Input() {
	const dispatch = useDispatch();
	const { words, language, darkTheme, currentWord, inputText } = useSelector((state) => state.word);

	const keyDownHandler = (e) => {
		if (e.code === "Space") {
			if (e.target.value.trim() === (language === "turkish" ? words[currentWord + 1].turkish : words[currentWord + 1].english)) {
				dispatch(changeInputText(e.target.value.trim()));
				dispatch(wordStatus());
			}
			e.target.value = "";
			dispatch(currentWordIncrease());
		}
	};
	return (
		<div className="input">
			<input type="text" name="" id="" onKeyUp={(e) => keyDownHandler(e)} />
		</div>
	);
}

export default Input;
