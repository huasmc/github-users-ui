import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
	name: "app",
	initialState: {
		value: 0,
	},
	reducers: {},
});

export default appSlice.reducer;
