import { combineReducers } from 'redux';
import user from './user';
import scoreboard from './scoreboard';
import game from './game';

const reducers = combineReducers({
  user: user.reducer,
  scoreboard: scoreboard.reducer,
  game: game.reducer,
});

export default reducers;
