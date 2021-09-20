import React from 'react';
import PropTypes from 'prop-types';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Header from '~/components/Header';
import MemoStatusbar from '~/components/MemoStatusbar';
import {
  Card,
  CardsContainer,
  Container,
  HeaderWrapper,
  Wrapper,
} from './styles';
import MemoText from '~/components/MemoText';
import { cardStatus } from '~/enum/cardStatus';

const GameView = ({ cards, timerToTurnAll }) => {
  const safeArea = useSafeAreaInsets();

  return (
    <Container>
      <MemoStatusbar />
      <Header>
        <HeaderWrapper>
          <MemoText
            guide="headerTitle"
            color="white">{`${0} jodagas`}</MemoText>
          <MemoText guide="headerTitle" color="white">
            00:00
          </MemoText>
        </HeaderWrapper>
      </Header>
      <Wrapper safeArea={safeArea}>
        <MemoText guide="headerTitle" color="black">
          {`00:${
            timerToTurnAll < 0
              ? '00'
              : timerToTurnAll.toLocaleString('en-US', {
                  minimumIntegerDigits: 2,
                  useGrouping: false,
                })
          }`}
        </MemoText>
        <CardsContainer>
          {cards.map((item, index) => (
            <Card id={item.id + index}>
              {item.status === cardStatus.SHOWED && (
                <item.image height={50} width={50} />
              )}
            </Card>
          ))}
        </CardsContainer>
      </Wrapper>
    </Container>
  );
};

GameView.propTypes = {
  cards: PropTypes.array.isRequired,
  timerToTurnAll: PropTypes.number.isRequired,
};

export default GameView;
