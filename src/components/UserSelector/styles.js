import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  width: 100%;
  height: 48px;
  background-color: ${(p) => p.theme.colors.background};
  border-radius: 8px;
  padding: 0px 6px;
  align-items: center;
  flex-direction: row;
`;

export const ShowUsersButton = styled(LinearGradient).attrs((p) => ({
  colors: [p.theme.colors.gradient1, p.theme.colors.gradient2],
  start: { x: 1.0, y: 0 },
  end: { x: 0, y: 3.0 },
}))`
  height: 36px;
  width: 36px;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  padding-top: 4px;
`;
