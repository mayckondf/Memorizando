import { combineReducers } from 'redux';
import user from './user';
import scoreboard from './scoreboard';

const reducers = combineReducers({
  user: user.reducer,
  scoreboard: scoreboard.reducer,
});

export default reducers;
