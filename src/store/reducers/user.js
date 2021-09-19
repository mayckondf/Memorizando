import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentUser: null,
  users: [],
};

const user = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.currentUser = action.payload.user;
      state.user.push(action.payload.user);
    },
    selectUser: (state, action) => {
      state.currentUser = action.payload.user;
    },
    clear: () => initialState,
  },
});

export const { addUser, selectUser, clear } = user.actions;
export default user;
