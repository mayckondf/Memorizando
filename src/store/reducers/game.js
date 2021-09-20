import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cards: [],
};

const game = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setCards: (state, action) => {
      state.cards = action.payload;
    },
    setVisibleCard: (state, action) => {
      state.cards[action.payload.index] = {
        ...state.cards[action.payload.index],
        status: action.payload.visibility,
      };
    },
    clear: () => initialState,
  },
});

export const { clear, setCards, setVisibleCard } = game.actions;
export default game;
