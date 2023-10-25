import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

export const Wrapper = styled.SafeAreaView`
  margin-top: 30px;
`;

export const Title = styled.Text`
  font-family: 'Roboto-Regular';
  line-height: 24px;
  color: rgba(0, 0, 0, 1);
  font-size: 20px;
  text-align: center;
  margin-bottom: 20px;
`;

export const InlineStyles = StyleSheet.create({
  gradientContainer: {
    width: '100%',
    height: 4,
  },
});
