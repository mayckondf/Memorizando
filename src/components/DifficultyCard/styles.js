import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(TouchableOpacity)`
  flex: 1;
  background-color: ${(p) => p.theme.colors.background};
  border-radius: 6px;
  padding: 16px 0;
  margin: 8px;
  align-items: center;
  justify-content: center;
`;

export const IconView = styled.View`
  padding: 8px 0;
`;

export const CardInfo = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-evenly;
`;
