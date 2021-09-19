import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  low: [],
  medium: [],
  high: [],
};

const scoreboard = createSlice({
  name: 'scoreboard',
  initialState,
  reducers: {
    clear: () => initialState,
  },
});

export const { clear } = scoreboard.actions;
export default scoreboard;
