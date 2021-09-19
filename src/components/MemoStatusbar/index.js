import React from 'react';
import { StatusBar, useColorScheme } from 'react-native';

const MemoStatusbar = () => {
  const theme = useColorScheme();

  return (
    <StatusBar
      barStyle={`${theme}-content`}
      translucent
      backgroundColor="transparent"
    />
  );
};

export default MemoStatusbar;
