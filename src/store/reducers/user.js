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
      const userWithId = { ...action.payload, id: state.users.length };
      state.currentUser = userWithId;
      state.users.push(userWithId);
    },
    selectUser: (state, action) => {
      state.currentUser = action.payload;
    },
    clear: () => initialState,
  },
});

export const { addUser, selectUser, clear } = user.actions;
export default user;
