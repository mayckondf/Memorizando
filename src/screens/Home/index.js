import React, { useEffect, useRef } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { difficulties } from '~/enum/difficulty';
import HomeView from './view';

const Home = () => {
  const { t } = useTranslation();
  const navigation = useNavigation();
  const userModalRef = useRef();
  const { users } = useSelector((state) => state.user);

  const goToGame = (difficulty) => {
    navigation.navigate('Game', { difficulty });
  };

  const openUserSelector = () => {
    userModalRef.current?.show();
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

  useEffect(() => {
    if (users.length === 0) {
      userModalRef.current?.show();
    }
  }, [users]);

  return (
    <HomeView
      difficultyOptions={difficultyOptions}
      userModalRef={userModalRef}
      openUserSelector={openUserSelector}
    />
  );
};

export default Home;
