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

export const fetchRepositories = createAsyncThunk(
	"repositories",
	async (url) => {
		try {
			const response = await get(url);
			return response;
		} catch (error) {
			throw new Error(error);
		}
	}
);

export const fetchUserData = createAsyncThunk("user", async (url) => {
	try {
		const response = await get(url);
		return response;
	} catch (error) {
		throw new Error(error);
	}
});

export const searchUser = createAsyncThunk("search", async (searchQuery) => {
	try {
		const response = await get(ENDPOINTS.SEARCH_USER + searchQuery);
		return response;
	} catch (error) {
		throw new Error(error);
	}
});

const appSlice = createSlice({
	name: "app",
	initialState: {
		users: [],
		selectedUser: null,
		repositories: null,
		selectedUserData: null,
	},
	reducers: {
		setSelectedUser: (state, action) => {
			state.selectedUser = action.payload;
		},
		setUsers: (state, action) => {
			state.users = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(fetchUsers.fulfilled, (state, action) => {
			const { payload } = action;
			state.users = payload;
		});
		builder.addCase(fetchRepositories.fulfilled, (state, action) => {
			const { payload } = action;
			state.repositories = payload;
		});
		builder.addCase(fetchUserData.fulfilled, (state, action) => {
			const { payload } = action;
			state.selectedUserData = payload;
		});
		builder.addCase(searchUser.fulfilled, (state, action) => {
			const { payload } = action;
			state.users = payload.items;
		});
	},
});

export const { setSelectedUser, setUsers } = appSlice.actions;
export const selectUsers = (state) => state.app.users;
export const selectSelectedUser = (state) => state.app.selectedUser;
export const selectUserMetadata = (state) => state.app.selectedUserData;
export const selectRepositories = (state) => state.app.repositories;

export default appSlice.reducer;
