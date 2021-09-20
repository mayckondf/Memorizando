import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import { difficulties } from '~/enum/difficulty';
import HomeView from './view';

const Home = () => {
  const { t } = useTranslation();
  const navigation = useNavigation();

  const goToGame = (difficulty) => {
    navigation.navigate('Game', { difficulty });
  };

  const difficultyOptions = [
    {
      text: t(`DIFFICULT.${difficulties.LOW}`),
      difficult: difficulties.LOW,
      onPress: () => goToGame(difficulties.LOW),
    },
    {
      text: t(`DIFFICULT.${difficulties.MEDIUM}`),
      difficult: difficulties.MEDIUM,
      onPress: () => goToGame(difficulties.MEDIUM),
    },
    {
      text: t(`DIFFICULT.${difficulties.HARD}`),
      difficult: difficulties.HARD,
      onPress: () => goToGame(difficulties.HARD),
    },
  ];

  return <HomeView difficultyOptions={difficultyOptions} />;
};

export default Home;
