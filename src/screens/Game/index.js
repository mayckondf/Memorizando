import React, { useEffect, useRef, useState } from 'react';
import { useRoute } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { hideAllCards, startGame } from '~/controller/gameController';
import { clear, clearMatch, matchCards, sumPlays } from '~/store/reducers/game';
import GameView from './view';
import { cardStatus } from '~/enum/cardStatus';
import { difficulties } from '~/enum/difficulty';

const Game = () => {
  const { params } = useRoute();
  const { cards, match, plays } = useSelector((state) => state.game);
  const [timerToTurnAll, setTimerToTurnAll] = useState(null);
  const modalRef = useRef();
  const timeout = useRef();
  const dispatch = useDispatch();

  const restartGame = () => {
    modalRef.current?.hide();
    dispatch(clear());
    startGame(params.difficulty);
    if (params.difficulty !== difficulties.HARD) {
      setTimerToTurnAll(5);
    }
  };

  useEffect(() => {
    if (cards.every((item) => item.status === cardStatus.SHOWED) && plays > 0) {
      modalRef.current?.show();
    }
  }, [cards]);

  useEffect(() => {
    if (match.length > 1) {
      dispatch(sumPlays());
      if (match[0].card.id === match[1].card.id) {
        dispatch(matchCards(match));
      } else {
        setTimeout(() => dispatch(clearMatch()), 1000);
      }
    }
  }, [match]);

  useEffect(() => {
    if (timerToTurnAll > 0) {
      timeout.current = setTimeout(
        () => setTimerToTurnAll((state) => state - 1),
        1000,
      );
    }
    if (timerToTurnAll === 0) hideAllCards(cards);
  }, [timerToTurnAll]);

  useEffect(() => {
    if (!params.resumeGame) restartGame();

    return () => {
      clearTimeout(timeout.current);
    };
  }, []);

  return (
    <GameView
      modalRef={modalRef}
      cards={cards}
      plays={plays}
      timerToTurnAll={timerToTurnAll || 0}
      match={match}
      restartGame={restartGame}
    />
  );
};

export default Game;
