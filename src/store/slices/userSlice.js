import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	email: null,
	password: null,
	id: null,
	nickname: null,
};

const userSlice = createSlice({
	name: "user",
	initialState: initialState,
	reducers: {
		addUser: (state, action) => {
			state.email = action.payload.email;
			state.password = action.payload.password;
			state.id = action.payload.id;
			state.nickname = action.payload.nickname;
		},
	},
});

export const { addUser } = userSlice.actions;

export default userSlice.reducer;
