import React from 'react';
import PropTypes from 'prop-types';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTranslation } from 'react-i18next';
import Header from '~/components/Header';
import MemoStatusbar from '~/components/MemoStatusbar';
import UserSelector from '~/components/UserSelector';
import {
  Container,
  DifficultContainer,
  DifficultWrapper,
  ScrollContent,
  WelcomeView,
} from './styles';
import DifficultyCard from '~/components/DifficultyCard';
import HomeScoreboard from '~/components/HomeScoreboard';
import UserModal from '~/components/UserModal';
import MemoText from '~/components/MemoText';

const HomeView = ({ difficultyOptions, userModalRef, openUserSelector }) => {
  const safeArea = useSafeAreaInsets();
  const { t } = useTranslation();

  return (
    <Container>
      <MemoStatusbar />
      <Header>
        <WelcomeView>
          <MemoText guide="WelcomeText" color="white">
            {t('HOME.WELCOME')}
          </MemoText>
          <MemoText guide="GameText" color="white">
            {t('HOME.GAME_TITLE')}
          </MemoText>
        </WelcomeView>
        <UserSelector onPress={openUserSelector} />
      </Header>
      <ScrollContent safeArea={safeArea}>
        <DifficultContainer>
          <MemoText guide="cardTitle" color="textMedium" pHorizontal={8}>
            {t('DIFFICULTY_CARD.DESCRIPTION')}
          </MemoText>
          <DifficultWrapper>
            {difficultyOptions.map((item) => (
              <DifficultyCard key={item.difficult} item={item} />
            ))}
          </DifficultWrapper>
        </DifficultContainer>
        <HomeScoreboard />
      </ScrollContent>
      <UserModal modalRef={userModalRef} />
    </Container>
  );
};

HomeView.propTypes = {
  difficultyOptions: PropTypes.array.isRequired,
  userModalRef: PropTypes.any.isRequired,
  openUserSelector: PropTypes.func.isRequired,
};

export default HomeView;
