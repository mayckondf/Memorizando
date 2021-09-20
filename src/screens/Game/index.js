import React, { useEffect, useRef, useState } from 'react';
import { useRoute } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { HideAllCards, startGame } from '~/controller/gameController';
import GameView from './view';

const Game = () => {
  const { params } = useRoute();
  const { cards } = useSelector((state) => state.game);
  const [timerToTurnAll, setTimerToTurnAll] = useState(null);
  const timeout = useRef();

  useEffect(() => {
    if (timerToTurnAll > 0) {
      timeout.current = setTimeout(
        () => setTimerToTurnAll((state) => state - 1),
        1000,
      );
    }
    if (timerToTurnAll === 0) HideAllCards(cards);
  }, [timerToTurnAll]);

  useEffect(() => {
    if (!params.resumeGame) {
      startGame(params.difficulty);
      setTimerToTurnAll(10);
    }
    return () => {
      clearTimeout(timeout.current);
    };
  }, []);

  return <GameView cards={cards} timerToTurnAll={timerToTurnAll || 0} />;
};

export default Game;
