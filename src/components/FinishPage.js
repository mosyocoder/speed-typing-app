import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetGame } from "../redux/WordSlice";

function FinishPage() {
	const { currentWord, keyStroke, wordStat } = useSelector((state) => state.word);
	const dispatch = useDispatch();
	return (
		<div className="finishPage">
			<div class="card text-black bg-light mb-3">
				<div class="card-header text-center">Your Score Board</div>
				<div class="card-body text-center">
					<div className="card-title">
						<p>
							<span>{currentWord}</span> word/minute
						</p>
					</div>
					<div className="card-text">
						<p>Tuş Vuruşu:</p>
						<p>{keyStroke}</p>
					</div>
					<div className="card-text">
						<p>Correct Word:</p>
						<p>{wordStat.correctWord}</p>
					</div>
					<div className="card-text">
						<p>Wrong Word:</p>
						<p>{wordStat.wrongWord}</p>
					</div>
					<div className="card-text">
						<p>Your Performance:</p>
						<p>%{((wordStat.correctWord / currentWord) * 100).toFixed(2)}</p>
					</div>
				</div>
			</div>
			<button type="button" className="btn btn-outline-dark btn-lg" onClick={() => dispatch(resetGame())}>
				Try Again
			</button>
		</div>
	);
}

export default FinishPage;
