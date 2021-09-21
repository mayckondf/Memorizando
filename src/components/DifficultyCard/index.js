import React from 'react';
import PropTypes from 'prop-types';
import MemoText from '../MemoText';
import { Container, CardInfo, IconView } from './styles';
import LowIcon from '~/assets/svgs/speed-easy.svg';
import MediumIcon from '~/assets/svgs/speed-medium.svg';
import HardIcon from '~/assets/svgs/speed-hard.svg';
import { difficulties } from '~/enum/difficulty';

const DifficultyCard = ({ item }) => {
  const handleDifficultIcon = () => {
    const itemDifficult = item.difficult;

    switch (itemDifficult) {
      case difficulties.MEDIUM:
        return <MediumIcon height={75} width={75} alignSelf="center" />;
      case difficulties.HARD:
        return <HardIcon height={75} width={75} alignSelf="center" />;
      default:
        return <LowIcon height={75} width={75} alignSelf="center" />;
    }
  };

  return (
    <Container onPress={item.onPress}>
      <CardInfo>
        <IconView>{handleDifficultIcon()}</IconView>
        <MemoText guide="cardTitle" color="textHighlight">
          {item.text}
        </MemoText>
      </CardInfo>
    </Container>
  );
};

DifficultyCard.propTypes = {
  item: PropTypes.shape({
    difficult: PropTypes.string,
    text: PropTypes.string,
    onPress: PropTypes.func,
  }).isRequired,
};

export default DifficultyCard;
