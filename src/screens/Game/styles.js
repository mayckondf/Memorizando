import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const HeaderWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const CardsContainer = styled.View`
  flex-direction: row;
  padding: 8px;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Wrapper = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding-bottom: ${(p) => p.safeArea.bottom || 0}px;
`;

export const ModalContainer = styled.View`
  padding: 16px;
`;
