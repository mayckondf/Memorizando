import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import MemoText from '../MemoText';
import { CardInfo, Container } from './styles';
import GameIcon from '~/assets/svgs/game-structure.svg';

const DifficultyCard = ({ item }) => {
  const { t } = useTranslation();

  return (
    <Container>
      <CardInfo>
        <MemoText guide="cardDescription" color="secondary1">
          {t('DIFFICULTY_CARD.DESCRIPTION')}
        </MemoText>
        <MemoText guide="cardTitle">{item.text}</MemoText>
      </CardInfo>
      <GameIcon height={40} width={40} alignSelf="center" />
    </Container>
  );
};

DifficultyCard.propTypes = {
  item: PropTypes.shape({
    text: PropTypes.string,
  }).isRequired,
};

export default DifficultyCard;
