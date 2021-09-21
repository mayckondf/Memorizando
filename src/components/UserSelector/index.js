import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import MemoText from '../MemoText';
import { Container, ShowUsersButton } from './styles';
import ArrowDown from '~/assets/svgs/arrow-down.svg';

const UserSelector = ({ onPress }) => {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <Container onPress={onPress}>
      <MemoText
        color="textHighlight"
        guide="nameSelector"
        flex
        pHorizontal={16}>
        {currentUser?.name}
      </MemoText>
      <ShowUsersButton>
        <ArrowDown />
      </ShowUsersButton>
    </Container>
  );
};

UserSelector.propTypes = {
  onPress: PropTypes.func.isRequired,
};

export default UserSelector;
