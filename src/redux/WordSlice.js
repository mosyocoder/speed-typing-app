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
		time: 10,
		status: "wait",
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
		timeDecrease: (state) => {
			state.time -= 1;
		},
	},
});

export const { darkTheme, changeLang, currentWordIncrease, wordStatus, changeInputText, statusChange, timeDecrease } = WordSlice.actions;
export default WordSlice.reducer;
