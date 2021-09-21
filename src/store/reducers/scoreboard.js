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
    registerScore: (state, action) => {
      state[action.payload.difficulty].push(action.payload.scoreboard);
      state[action.payload.difficulty].sort((a, b) => a.score - b.score);
    },
    clear: () => initialState,
  },
});

export const { clear, registerScore } = scoreboard.actions;
export default scoreboard;
