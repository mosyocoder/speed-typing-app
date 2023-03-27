import { configureStore } from "@reduxjs/toolkit";
import WordSlice from "./WordSlice";

export const store = configureStore({
	reducer: {
		word: WordSlice,
	},
});
