import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 16px 16px 0px 16px;
  background: white;
`;

export const Input = styled.TextInput`
  height: 48px;
  width: 100%;
  background: ${(p) => p.theme.colors.background};
  border-radius: 6px;
  padding: 0px 16px;
`;

export const FlatList = styled.FlatList``;

export const Divider = styled.View`
  height: 1px;
  width: 100%;
  background: ${(p) => p.theme.colors.divider};
  margin: 8px 0px;
`;

export const UserButton = styled.TouchableOpacity`
  height: 32px;
  justify-content: center;
`;
