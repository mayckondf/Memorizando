import styled from 'styled-components/native';
import TouchableShadow from '~/components/TouchableShadow';

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

export const Card = styled(TouchableShadow)`
  height: 70px;
  width: 70px;
  background: white;
  border-radius: 8px;
  margin: 8px;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding-bottom: ${(p) => p.safeArea.bottom || 0}px;
`;
