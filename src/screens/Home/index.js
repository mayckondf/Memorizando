import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import { difficulties } from '~/enum/difficulty';
import HomeView from './view';

const Home = () => {
  const { t } = useTranslation();
  const navigation = useNavigation();

  const goToGame = (difficult) => {
    navigation.navigate('Game', { difficult });
  };

  const difficultyOptions = [
    {
      text: t(`DIFFICULT.${difficulties.LOW}`),
      difficult: difficulties.LOW,
      onPress: goToGame,
    },
    {
      text: t(`DIFFICULT.${difficulties.MEDIUM}`),
      difficult: difficulties.MEDIUM,
      onPress: goToGame,
    },
    {
      text: t(`DIFFICULT.${difficulties.HARD}`),
      difficult: difficulties.HARD,
      onPress: goToGame,
    },
  ];

  return <HomeView difficultyOptions={difficultyOptions} />;
};

export default Home;
