import { createSlice } from '@reduxjs/toolkit';
import { cardStatus } from '~/enum/cardStatus';

const initialState = {
  cards: [],
  match: [],
  plays: 0,
};

const game = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setCards: (state, action) => {
      state.cards = action.payload;
    },
    setVisibleCard: (state, action) => {
      state.cards[action.payload.index].status = action.payload.status;
    },
    matchCards: (state) => {
      state.match.forEach((item) => {
        state.cards[item.index].status = cardStatus.SHOWED;
      });
      state.match = [];
    },
    sumPlays: (state) => {
      state.plays += 1;
    },
    addToMatch: (state, action) => {
      if (!state.match.find((item) => item.index === action.payload.index))
        state.match.push(action.payload);
    },
    clearMatch: (state) => {
      state.match = [];
    },
    clear: () => initialState,
  },
});

export const {
  clear,
  setCards,
  sumPlays,
  setVisibleCard,
  addToMatch,
  clearMatch,
  matchCards,
} = game.actions;
export default game;
