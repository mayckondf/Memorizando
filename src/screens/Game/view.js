/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTranslation } from 'react-i18next';
import ActionSheet from 'react-native-actions-sheet';
import { useNavigation } from '@react-navigation/native';
import Header from '~/components/Header';
import MemoStatusbar from '~/components/MemoStatusbar';
import {
  CardsContainer,
  Container,
  HeaderWrapper,
  ModalContainer,
  Wrapper,
} from './styles';
import MemoText from '~/components/MemoText';
import Card from '~/components/Card';
import MemoButton from '~/components/MemoButton';

const GameView = ({
  cards,
  timerToTurnAll,
  match,
  plays,
  modalRef,
  restartGame,
}) => {
  const safeArea = useSafeAreaInsets();
  const { t } = useTranslation();
  const navigation = useNavigation();

  const backToHome = () => {
    restartGame();
    navigation.goBack();
  };

  return (
    <Container>
      <MemoStatusbar />
      <Header>
        <HeaderWrapper>
          <MemoText guide="headerTitle" color="white">
            {`${plays} ${t('GAME.PLAYS')}`}
          </MemoText>
          <MemoText guide="headerTitle" color="white">
            00:
            {timerToTurnAll < 0
              ? '00'
              : timerToTurnAll.toLocaleString('en-US', {
                  minimumIntegerDigits: 2,
                  useGrouping: false,
                })}
          </MemoText>
        </HeaderWrapper>
      </Header>
      <Wrapper safeArea={safeArea}>
        <CardsContainer>
          {cards.map((item, index) => (
            <Card
              show={timerToTurnAll > 0}
              item={item}
              index={index}
              key={`card:${index}`}
              match={match}
            />
          ))}
        </CardsContainer>
      </Wrapper>
      <ActionSheet
        rootStyle={{ elevation: 10 }}
        ref={modalRef}
        adjustToContentHeight
        closeOnTouchBackdrop={false}>
        <ModalContainer safeArea={safeArea}>
          <MemoText alignSelf guide="cardTitle" pVertical={16}>
            {t('GAME.WINNER', { plays })}
          </MemoText>
          <MemoButton onPress={restartGame}>{t('GAME.PLAY_AGAIN')}</MemoButton>
          <MemoButton outlined onPress={backToHome}>
            {t('GAME.BACK_HOME')}
          </MemoButton>
        </ModalContainer>
      </ActionSheet>
    </Container>
  );
};

GameView.propTypes = {
  cards: PropTypes.array.isRequired,
  timerToTurnAll: PropTypes.number.isRequired,
  match: PropTypes.array.isRequired,
  plays: PropTypes.number.isRequired,
  modalRef: PropTypes.any.isRequired,
  restartGame: PropTypes.func.isRequired,
};

export default GameView;
