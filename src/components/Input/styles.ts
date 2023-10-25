import styled from 'styled-components/native';

export const Wrapper = styled.View`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
`;

export const CustomInput = styled.TextInput`
  font-family: 'Robot-Regular';
  color: rgba(109, 109, 109, 1);
  line-height: 20px;
  font-size: 17px;
  width: 350px;
  border-radius: 14px;
  border: 1px solid rgba(85, 85, 85, 1);
  padding: 14px 0 14px 16px;
`;

export const InputErrorText = styled.Text`
  font-family: 'Poppins-Regular';
  color: rgba(237, 5, 28, 1);
  line-height: 21px;
  font-size: 14px;
  max-width: 210px;
`;

export const FormContainer = styled.View`
  display: flex;
`;
