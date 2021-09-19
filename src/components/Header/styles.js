import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';

export const GradientBackground = styled(LinearGradient).attrs((p) => ({
  colors: [p.theme.colors.gradient1, p.theme.colors.gradient2],
  start: { x: 1.0, y: 0 },
  end: { x: 0, y: 1.0 },
}))`
  width: 100%;
  padding: 16px;
  padding-top: ${(p) => p.safeArea.top || 20}px;
`;
