import { createSlice } from "@reduxjs/toolkit";
import arrayShuffle from "array-shuffle";

import words from "../Word/words.json";

export const WordSlice = createSlice({
	name: "words",
	initialState: {
		words: arrayShuffle(words.words).map((item) => {
			return { ...item, status: "" };
		}),
		darkTheme: false,
		language: "turkish",
		currentWord: 0,
		inputText: "",
		time: 60,
		status: false,
		gameStat: "",
		keyStroke: 0,
		wordStat: {
			correctWord: 0,
			wrongWord: 0,
		},
	},
	reducers: {
		darkTheme: (state) => {
			state.darkTheme = !state.darkTheme;
		},
		changeLang: (state, action) => {
			state.language = action.payload;
		},
		currentWordIncrease: (state) => {
			state.currentWord += 1;
		},
		changeInputText: (state, action) => {
			state.inputText = action.payload;
		},
		wordStatus: (state, action) => {
			const cw = state.words[state.currentWord + 1];
			cw.status = action.payload;
		},
		statusChange: (state, action) => {
			state.status = action.payload;
		},
		gameStat: (state, action) => {
			state.gameStat = action.payload;
		},
		keyStrokeInc: (state) => {
			state.keyStroke += 1;
		},
		wordStatusCount: (state, action) => {
			if (action.payload === true) state.wordStat.correctWord += 1;
			else state.wordStat.wrongWord += 1;
		},
		resetGame: (state) => {
			state.currentWord = 0;
			state.words = arrayShuffle(words.words);
			state.time = 60;
			state.gameStat = "";
			state.keyStroke = 0;
			state.status = false;
			state.wordStat.correctWord = 0;
			state.wordStat.wrongWord = 0;
		},
	},
});

export const { darkTheme, changeLang, wordStatusCount, resetGame, currentWordIncrease, wordStatus, changeInputText, statusChange, gameStat, keyStrokeInc } = WordSlice.actions;
export default WordSlice.reducer;
