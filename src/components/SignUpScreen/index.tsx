import TextStrings from '@constants/textStrings';
import { useNavigation } from '@react-navigation/native';
import { Header, SignUpForm } from '@root';
import { StackNavigation } from '@src/types/screenNavigation';
import React from 'react';

import {
  Description,
  Devider,
  FooterContainer,
  FooterText,
  RedirectionButtonText,
  RedirectionButtonToLigIn,
  Title,
  TitleContainer,
  Wrapper,
} from './styles';

export default function SignUpScreen() {
  const navigation = useNavigation<StackNavigation>();

  const handleRedirectionToLogIn = () => {
    navigation.navigate('SignInScreen');
  };

  return (
    <Wrapper>
      <Header />
      <TitleContainer>
        <Devider />
        <Title>{TextStrings.SignUpScreenTitle}</Title>
        <Devider right />
      </TitleContainer>
      <Description>{TextStrings.SignUpScreenDescription}</Description>
      <SignUpForm />
      <FooterContainer>
        <FooterText>{TextStrings.SignUpScreenFooterDescription}</FooterText>
        <RedirectionButtonToLigIn onPress={handleRedirectionToLogIn}>
          <RedirectionButtonText>
            {TextStrings.SignUpScreenRedirectionButtonText}
          </RedirectionButtonText>
        </RedirectionButtonToLigIn>
      </FooterContainer>
    </Wrapper>
  );
}
