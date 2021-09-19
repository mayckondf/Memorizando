import React from 'react';
import PropTypes from 'prop-types';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Header from '~/components/Header';
import MemoStatusbar from '~/components/MemoStatusbar';
import UserSelector from '~/components/UserSelector';
import { Container, ScrollContent } from './styles';
import DifficultyCard from '~/components/DifficultyCard';
import HomeScoreboard from '~/components/HomeScoreboard';

const HomeView = ({ difficultyOptions }) => {
  const safeArea = useSafeAreaInsets();

  return (
    <Container>
      <MemoStatusbar />
      <Header>
        <UserSelector />
      </Header>
      <ScrollContent safeArea={safeArea}>
        {difficultyOptions.map((item) => (
          <DifficultyCard key={item.difficult} item={item} />
        ))}
        <HomeScoreboard />
      </ScrollContent>
    </Container>
  );
};

HomeView.propTypes = {
  difficultyOptions: PropTypes.array.isRequired,
};

export default HomeView;
