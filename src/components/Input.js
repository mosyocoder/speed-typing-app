import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeInputText, currentWordIncrease, gameStat, keyStrokeInc, statusChange, wordStatus, wordStatusCount } from "../redux/WordSlice";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

function Input() {
	const dispatch = useDispatch();
	const { words, language, currentWord, time, status } = useSelector((state) => state.word);

	const renderTime = ({ remainingTime }) => {
		if (remainingTime === 0) {
			return "Time is up !";
		} else {
			return (
				<div role="timer" aria-live="assertive" className="time">
					<p>{remainingTime > 10 ? "Remaining" : "Hurry Up !"}</p>
					<p>{remainingTime}</p>
					<p>Second</p>
				</div>
			);
		}
	};

	const keyDownHandler = (e) => {
		dispatch(statusChange(true));
		dispatch(keyStrokeInc());
		if (e.code === "Space") {
			if (e.target.value.trim().toLowerCase() === (language === "turkish" ? words[currentWord + 1].turkish : words[currentWord + 1].english).toLowerCase()) {
				dispatch(changeInputText(e.target.value.trim()));
				dispatch(wordStatus("correct"));
				dispatch(wordStatusCount(true));
			} else {
				dispatch(changeInputText(e.target.value.trim()));
				dispatch(wordStatus("wrong"));
				dispatch(wordStatusCount(false));
			}

			e.target.value = "";
			dispatch(currentWordIncrease());
		}
	};

	const complateHandler = () => {
		dispatch(gameStat("finish"));
	};

	return (
		<div className="input w-100 d-flex mt-3 rounded-2">
			<input type="text" onKeyUp={(e) => keyDownHandler(e)} className="p-2" />
			<div className="p-2">
				<CountdownCircleTimer key={time} onComplete={() => complateHandler()} isPlaying={status} duration={time} colors={["#2cba00", "#a3ff00", "#fff400", "#ffa700", "#ff0000"]} size={108} colorsTime={[60, 48, 36, 24, 0]} strokeWidth={8}>
					{renderTime}
				</CountdownCircleTimer>
			</div>
		</div>
	);
}

export default Input;
