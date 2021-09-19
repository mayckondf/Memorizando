import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: ${(p) => p.theme.colors.primary1};
`;

export const ScrollContent = styled.ScrollView.attrs((p) => ({
  contentContainerStyle: {
    flexGrow: 1,
    paddingTop: 8,
    paddingBottom: p.safeArea.bottom || 8,
  },
}))`
  flex: 1;
`;
