import styled from 'styled-components/native';
import TouchableShadow from '../TouchableShadow';

export const ContainerOnlyText = styled(TouchableShadow)`
  height: ${(p) => p.height || 46}px;
  max-height: ${(p) => p.height || 46}px;
  ${(p) => (p.width ? `width:${p.width}px` : '')}
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  margin: 8px;
  padding: 0px 8px;
`;

export const ContainerNormal = styled(ContainerOnlyText)`
  background: ${(p) =>
    p.disabled ? p.theme.secondary1 : p.theme.colors[p.color]};
`;

export const ContainerOutlined = styled(ContainerOnlyText)`
  border-width: 1px;
  border-color: ${(p) =>
    p.disabled ? p.theme.secondary1 : p.theme.colors[p.color]};
`;

export const StyledActivity = styled.ActivityIndicator.attrs((p) => ({
  color: p.color ? p.theme[p.color] : `white`,
}))``;
