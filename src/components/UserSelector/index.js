import React from 'react';
import { useSelector } from 'react-redux';
import MemoText from '../MemoText';
import { Container, ShowUsersButton } from './styles';
import ArrowDown from '~/assets/svgs/arrow-down.svg';

const UserSelector = () => {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <Container>
      <MemoText color="white" guide="nameSelector" flex pHorizontal={16}>
        {currentUser?.name}
      </MemoText>
      <ShowUsersButton>
        <ArrowDown />
      </ShowUsersButton>
    </Container>
  );
};

export default UserSelector;
