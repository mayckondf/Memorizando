import styled from 'styled-components/native';
import MemoText from '../MemoText';
import TouchableShadow from '../TouchableShadow';

export const Container = styled(TouchableShadow)`
  background: ${(p) => p.theme.colors.cardBackground};
  margin: 8px 16px;
  border-radius: 8px;
  padding: 16px;
`;

export const DifficultySelector = styled.View`
  height: 36px;
  flex-direction: row;
  margin: 16px 0;
`;

export const LowDifficultyButton = styled.TouchableOpacity`
  flex: 1;
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
  border: 1px solid
    ${(p) => (p.active ? p.theme.colors.primary4 : p.theme.colors.background)};
  justify-content: center;
  align-items: center;
  background: ${(p) =>
    p.active ? p.theme.colors.primary4 : p.theme.colors.background};
`;

export const MediumDifficultyButton = styled.TouchableOpacity`
  flex: 1;
  border: 1px solid
    ${(p) => (p.active ? p.theme.colors.primary4 : p.theme.colors.background)};
  justify-content: center;
  border-left-width: 0px;
  border-right-width: 0px;
  align-items: center;
  background: ${(p) =>
    p.active ? p.theme.colors.primary4 : p.theme.colors.background};
`;

export const HardDifficultyButton = styled.TouchableOpacity`
  flex: 1;
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
  border: 1px solid
    ${(p) => (p.active ? p.theme.colors.primary4 : p.theme.colors.background)};
  justify-content: center;
  align-items: center;
  background: ${(p) =>
    p.active ? p.theme.colors.primary4 : p.theme.colors.background};
`;

export const PodiumContainer = styled.View`
  height: 160px;
  flex-direction: row;
  align-items: flex-end;
  background: ${(p) => p.theme.colors.background};
  border-radius: 8px;
`;

export const Podium = styled.View`
  flex: 1;
  margin: 0 16px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  height: ${(p) => p.heightPercent}%;
  background: ${(p) => p.theme.colors[p.color]};
`;

export const Position = styled(MemoText)`
  align-self: center;
  padding-top: 10px;
  color: white;
`;

export const PlayerContainer = styled.View`
  height: 36px;
  flex-direction: row;
`;

export const PlayerView = styled.View`
  flex: 1;
  justify-content: center;
  margin: 0px 10px;
  align-items: center;
`;
