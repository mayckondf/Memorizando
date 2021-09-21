import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: ${(p) => p.theme.colors.background};
`;

export const DifficultContainer = styled.View`
  flex: 1;
  background: ${(p) => p.theme.colors.cardBackground};
  margin: 0 16px;
  border-radius: 8px;
  padding: 16px 8px;
`;

export const DifficultWrapper = styled.View`
  flex-direction: row;
  flex: 1;
`;

export const WelcomeView = styled.View`
  margin-bottom: 16px;
`;

export const ScrollContent = styled.ScrollView.attrs((p) => ({
  contentContainerStyle: {
    paddingTop: 16,
    paddingBottom: p.safeArea.bottom || 16,
  },
}))`
  flex: 1;
`;
