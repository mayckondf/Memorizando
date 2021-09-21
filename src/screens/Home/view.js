import React from 'react';
import PropTypes from 'prop-types';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Header from '~/components/Header';
import MemoStatusbar from '~/components/MemoStatusbar';
import UserSelector from '~/components/UserSelector';
import { Container, ScrollContent } from './styles';
import DifficultyCard from '~/components/DifficultyCard';
import HomeScoreboard from '~/components/HomeScoreboard';
import UserModal from '~/components/UserModal';

const HomeView = ({ difficultyOptions, userModalRef, openUserSelector }) => {
  const safeArea = useSafeAreaInsets();

  return (
    <Container>
      <MemoStatusbar />
      <Header>
        <UserSelector onPress={openUserSelector} />
      </Header>
      <ScrollContent safeArea={safeArea}>
        {difficultyOptions.map((item) => (
          <DifficultyCard key={item.difficult} item={item} />
        ))}
        <HomeScoreboard />
      </ScrollContent>
      <UserModal modalRef={userModalRef} />
    </Container>
  );
};

HomeView.propTypes = {
  difficultyOptions: PropTypes.array.isRequired,
};

export default HomeView;
