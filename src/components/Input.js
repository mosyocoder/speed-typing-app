import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeInputText, currentWordIncrease, statusChange, timeDecrease, wordStatus } from "../redux/WordSlice";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function Input() {
	const dispatch = useDispatch();
	const { words, language, currentWord, time, status } = useSelector((state) => state.word);

	useEffect(() => {
		if (status === "start") {
			if (time !== 0) {
				setTimeout(() => {
					dispatch(timeDecrease());
				}, 1000);
			}
		}
	}, [status, time, dispatch]);

	const keyDownHandler = (e) => {
		dispatch(statusChange("start"));
		if (e.code === "Space") {
			console.log(e.target.value);
			console.log(words[currentWord + 1].turkish);
			if (e.target.value.trim() === (language === "turkish" ? words[currentWord + 1].turkish : words[currentWord + 1].english)) {
				dispatch(changeInputText(e.target.value.trim()));
				dispatch(wordStatus("correct"));
			} else {
				dispatch(changeInputText(e.target.value.trim()));
				dispatch(wordStatus("wrong"));
			}

			e.target.value = "";
			dispatch(currentWordIncrease());
		}
	};
	return (
		<div className="input w-100 d-flex mt-3 rounded-2">
			<input type="text" onKeyUp={(e) => keyDownHandler(e)} className="p-2" />
			<div className="mx-3 p-2" style={{ width: 100, height: 100 }}>
				<CircularProgressbar
					value={time}
					text={time}
					maxValue={10}
					minValue={0}
					strokeWidth={8}
					styles={buildStyles({
						strokeLinecap: "butt",
						root: {},
						// Customize the path, i.e. the "completed progress"
						path: {
							// Path color
							stroke: `rgba(62, 152, 199, ${time / 100})`,
							// Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
							strokeLinecap: "butt",
							// Customize transition animation
							transition: "stroke-dashoffset 0.5s ease 0s",
							// Rotate the path
							transform: "rotate(0.25turn)",
							transformOrigin: "center center",
						},
						// Customize the circle behind the path, i.e. the "total progress"
						trail: {
							// Trail color
							stroke: "#d6d6d6",
							// Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
							strokeLinecap: "butt",
							// Rotate the trail
							transform: "rotate(0.25turn)",
							transformOrigin: "center center",
						},
						// Customize the text
						text: {
							// Text color
							fill: "#f88",
							// Text size
							fontSize: "16px",
						},
						// Customize background - only used when the `background` prop is true
						background: {
							fill: "#3e98c7",
						},
					})}
				/>
				;
			</div>
		</div>
	);
}

export default Input;
