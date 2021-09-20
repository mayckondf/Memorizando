import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import { fontGuides } from '~/styles/fonts';

export const Text = styled.Text`
  ${(p) => (p.flex ? 'flex:1' : null)}
  ${(p) => (p.height ? `height:${p.height}px` : null)}
  ${(p) => (p.alignSelf ? `alignSelf:center` : null)}
  ${(p) => (p.height ? `maxHeight:${p.height}px` : null)}
  ${(p) => (p.pHorizontal ? `paddingHorizontal:${p.pHorizontal}px` : null)}
  ${(p) => (p.pVertical ? `paddingVertical:${p.pVertical}px` : null)}
  font-weight: ${(p) => p.weight || 300};
  font-family: ${(p) => p.fontFamily || 'Lato'};
  font-size: ${(p) => p.size || 12}px;
  color: ${(p) => p.theme.colors[p.color] || p.color};
`;

const MemoText = ({ guide, ...props }) => {
  return <Text {...fontGuides[guide]} {...props} />;
};

MemoText.defaultProps = {
  guide: undefined,
  color: 'black',
};

MemoText.propTypes = {
  guide: PropTypes.string,
  color: PropTypes.string,
};

export default MemoText;
