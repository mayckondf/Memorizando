import styled from 'styled-components/native';
import TouchableShadow from '../TouchableShadow';

export const Container = styled(TouchableShadow)`
  min-height: 72px;
  height: 72px;
  background: ${(p) => p.theme.colors.primary2};
  margin: 8px 16px;
  border-radius: 8px;
  padding: 10px;
  flex-direction: row;
  justify-content: center;
`;

export const CardInfo = styled.View`
  flex: 1;
  justify-content: space-around;
`;
