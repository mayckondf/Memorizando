import styled from 'styled-components/native';
import MemoText from '../MemoText';
import TouchableShadow from '../TouchableShadow';

export const Container = styled(TouchableShadow)`
  background: white;
  margin: 8px 16px;
  border-radius: 8px;
  padding: 16px;
`;

export const DifficultySelector = styled.View`
  height: 36px;
  flex-direction: row;
  margin-bottom: 16px;
`;

export const LowDifficultyButton = styled.TouchableOpacity`
  flex: 1;
  border-top-left-radius: 16px;
  border-bottom-left-radius: 16px;
  border: 1px solid
    ${(p) => (p.active ? p.theme.colors.primary4 : p.theme.colors.secondary1)};
  justify-content: center;
  align-items: center;
  background: ${(p) =>
    p.active ? p.theme.colors.primary4 : p.theme.colors.white};
`;

export const MediumDifficultyButton = styled.TouchableOpacity`
  flex: 1;
  border: 1px solid
    ${(p) => (p.active ? p.theme.colors.primary4 : p.theme.colors.secondary1)};
  justify-content: center;
  border-left-width: 0px;
  border-right-width: 0px;
  align-items: center;
  background: ${(p) =>
    p.active ? p.theme.colors.primary4 : p.theme.colors.white};
`;

export const HardDifficultyButton = styled.TouchableOpacity`
  flex: 1;
  border-top-right-radius: 16px;
  border-bottom-right-radius: 16px;
  border: 1px solid
    ${(p) => (p.active ? p.theme.colors.primary4 : p.theme.colors.secondary1)};
  justify-content: center;
  align-items: center;
  background: ${(p) =>
    p.active ? p.theme.colors.primary4 : p.theme.colors.white};
`;

export const PodiumContainer = styled.View`
  height: 200px;
  flex-direction: row;
  align-items: flex-end;
`;

export const Podium = styled.View`
  flex: 1;
  margin: 10px;
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
