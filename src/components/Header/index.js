import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { GradientBackground } from './styles';

const Header = (props) => {
  const safeArea = useSafeAreaInsets();

  return <GradientBackground {...props} safeArea={safeArea} />;
};

export default Header;
