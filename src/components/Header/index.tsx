import TextStrings from '@constants/textStrings';
import LightTheme from '@theme/allTheme';
import React from 'react';
import { StatusBar } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { InlineStyles, Title, Wrapper } from './styles';

function Header() {
  return (
    <Wrapper>
      <StatusBar hidden />
      <Title>{TextStrings.HeaderTitle}</Title>
      <LinearGradient
        start={{ x: 0.0, y: 0.25 }}
        end={{ x: 0.5, y: 1.0 }}
        colors={LightTheme.headerGradientBlock}
        style={InlineStyles.gradientContainer}
      />
    </Wrapper>
  );
}

export default Header;
