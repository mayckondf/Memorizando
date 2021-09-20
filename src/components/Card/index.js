import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import { pressCard } from '~/controller/gameController';
import { cardStatus } from '~/enum/cardStatus';
import TouchableShadow from '../TouchableShadow';

export const Container = styled(TouchableShadow)`
  height: 70px;
  width: 70px;
  background: white;
  border-radius: 8px;
  margin: 8px;
  justify-content: center;
  align-items: center;
`;

const Card = ({ item, index, match, show }) => {
  const shouldShow =
    item?.status === cardStatus.SHOWED ||
    match.find((i) => i.index === index) ||
    show;

  const onPress = () => {
    pressCard(index);
  };

  return (
    <Container onPress={onPress} disabled={shouldShow}>
      {shouldShow && <item.image height={50} width={50} />}
    </Container>
  );
};

Card.propTypes = {
  item: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  match: PropTypes.array.isRequired,
  show: PropTypes.bool.isRequired,
};

export default Card;
