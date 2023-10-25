import styled from 'styled-components/native';

import { DeviderProps } from './types';

export const Wrapper = styled.SafeAreaView``;

export const TitleContainer = styled.View`
  width: 100%;
  margin-top: 69px;
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const Title = styled.Text`
  font-family: 'Roboto-Bold';
  font-size: 17px;
  line-height: 20px;
  color: rgba(0, 0, 0, 1);
`;

export const Devider = styled.View<DeviderProps>`
  width: 77px;
  height: 1px;
  background-color: rgba(0, 0, 0, 1);
  margin: ${({ right }) => {
    return right ? '0 0 0 25px' : '0 25px 0 0';
  }};
`;

export const Description = styled.Text`
  font-family: 'Roboto-Regular';
  font-size: 17px;
  color: rgba(52, 52, 52, 1);
  line-height: 25px;
  text-align: center;
  width: 96%;
  margin-top: 96px;
`;

export const FooterContainer = styled.View`
  width: 100%;
  align-items: center;
  margin-top: 20px;
`;

export const FooterText = styled.Text`
  font-family: 'Roboto-Regular';
  line-height: 16px;
  font-size: 14px;
  color: rgba(157, 157, 157, 1);
`;

export const RedirectionButtonToLigIn = styled.TouchableOpacity`
  margin-top: 8px;
`;

export const RedirectionButtonText = styled.Text`
  font-family: 'Roboto-Regular';
  font-size: 14px;
  line-height: 16px;
  color: rgba(226, 0, 70, 1);
`;
