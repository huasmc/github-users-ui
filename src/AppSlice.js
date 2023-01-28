import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ENDPOINTS } from "./service/endpoints";
import { get } from "./service/rest";

export const fetchUsers = createAsyncThunk("users", async (queryParams) => {
	try {
		const response = await get(ENDPOINTS.USER + "?", queryParams);
		return response;
	} catch (error) {
		throw new Error(error);
	}
});

const appSlice = createSlice({
	name: "app",
	initialState: {
		users: [],
	},
	extraReducers: (builder) => {
		builder.addCase(fetchUsers.fulfilled, (state, action) => {
			const { payload } = action;
			state.users = payload;
		});
	},
});

export const selectUsers = (state) => state.app.users;

export default appSlice.reducer;
