/* eslint-disable react/no-array-index-key */
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { difficulties } from '~/enum/difficulty';
import MemoText from '../MemoText';
import {
  Container,
  DifficultySelector,
  HardDifficultyButton,
  LowDifficultyButton,
  MediumDifficultyButton,
  PlayerContainer,
  PlayerView,
  Podium,
  PodiumContainer,
  Position,
} from './styles';

const HomeScoreboard = () => {
  const [difficulty, setDifficulty] = useState(difficulties.MEDIUM);
  const [players, setPlayers] = useState([]);
  const { t } = useTranslation();

  const { scoreboard } = useSelector((state) => state);

  const getScoreBoardPosition = () => {
    return [...scoreboard[difficulty], ...[{}, {}, {}]];
  };

  useEffect(() => {
    setPlayers(getScoreBoardPosition().slice(0, 3));
  }, [scoreboard, difficulty]);

  return (
    <Container>
      <MemoText guide="cardTitle" color="textMedium">
        {t('HOME.LEADERBOARD')}
      </MemoText>
      <DifficultySelector>
        <LowDifficultyButton
          active={difficulty === difficulties.LOW}
          onPress={() => setDifficulty(difficulties.LOW)}>
          <MemoText
            color={difficulty === difficulties.LOW ? 'white' : 'textMedium'}
            guide="DifficultySelector">
            {t(`DIFFICULT.${difficulties.LOW}`)}
          </MemoText>
        </LowDifficultyButton>
        <MediumDifficultyButton
          active={difficulty === difficulties.MEDIUM}
          onPress={() => setDifficulty(difficulties.MEDIUM)}>
          <MemoText
            color={difficulty === difficulties.MEDIUM ? 'white' : 'textMedium'}
            guide="DifficultySelector">
            {t(`DIFFICULT.${difficulties.MEDIUM}`)}
          </MemoText>
        </MediumDifficultyButton>
        <HardDifficultyButton
          active={difficulty === difficulties.HARD}
          onPress={() => setDifficulty(difficulties.HARD)}>
          <MemoText
            color={difficulty === difficulties.HARD ? 'white' : 'textMedium'}
            guide="DifficultySelector">
            {t(`DIFFICULT.${difficulties.HARD}`)}
          </MemoText>
        </HardDifficultyButton>
      </DifficultySelector>
      <PodiumContainer>
        <Podium heightPercent={40} color="podium2">
          <Position guide="PodiumPosition">2º</Position>
        </Podium>
        <Podium heightPercent={60} color="podium1">
          <Position guide="PodiumPosition">1º</Position>
        </Podium>
        <Podium heightPercent={30} color="podium3">
          <Position guide="PodiumPosition">3º</Position>
        </Podium>
      </PodiumContainer>
      <PlayerContainer>
        {players.map((player, pos) => (
          <PlayerView key={`player:${pos}`}>
            <MemoText
              guide="PlayerPodium"
              color="textHighlight"
              numberOfLines={1}>
              {player?.name || '-'}
            </MemoText>
            <MemoText guide="PlaysCounter" color="textMedium">
              {`${player?.score || 0} ${t('SCOREBOARD.SCORE')}`}
            </MemoText>
          </PlayerView>
        ))}
      </PlayerContainer>
    </Container>
  );
};

export default HomeScoreboard;
