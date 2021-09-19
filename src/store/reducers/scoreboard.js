import { createSlice } from '@reduxjs/toolkit';
import { difficulties } from '~/enum/difficulty';

const initialState = {
  [difficulties.LOW]: [],
  [difficulties.MEDIUM]: [],
  [difficulties.HARD]: [],
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
