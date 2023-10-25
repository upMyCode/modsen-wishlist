import { SignUpFormDimensions } from '@constants/dimensions';
import FIREBASE_ERROR from '@constants/firebaseError';
import TextStrings from '@constants/textStrings';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigation } from '@react-navigation/native';
import { Button, Input } from '@root';
import { handleSignUpAPI } from '@src/api/authAPI';
import { StackNavigation } from '@src/types/screenNavigation';
import LightTheme from '@theme/allTheme';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { View } from 'react-native';

import {
  FormWrapper,
  SignUpButtonContainer,
  SignUpErrorText,
  SignUpText,
} from './styles';
import { FormValues } from './types';
import validationScheme from './validationSheme';

export default function SignUpForm() {
  const [registrationError, setRegistrationError] = useState<string>('');
  const navigation = useNavigation<StackNavigation>();

  const defaultValues = {
    username: '',
    useremail: '',
    userpassword: '',
  };
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues,
    resolver: yupResolver(validationScheme),
  });

  const handleRedirectionToLogIn = () => {
    navigation.navigate('SignInScreen');
  };

  const handleSubmitForm = async (data: FormValues) => {
    const response = await handleSignUpAPI(
      data.useremail,
      data.userpassword,
      data.username
    );

    if (response && typeof response === 'string') {
      setRegistrationError(FIREBASE_ERROR[response]);
    } else if (response && typeof response !== 'string') {
      handleRedirectionToLogIn();
    }
  };

  return (
    <View>
      <FormWrapper>
        <Input
          control={control}
          name={TextStrings.SignUpFormInut1Name}
          formType="default"
          placeholder={TextStrings.SignUpFormInut1placeholder}
          maxLength={SignUpFormDimensions.inputMLength}
          error={errors.username?.message ?? ''}
        />
        <Input
          control={control}
          name={TextStrings.SignUpFormInut2Name}
          formType="default"
          placeholder={TextStrings.SignUpFormInut2placeholder}
          maxLength={SignUpFormDimensions.inputMLength}
          error={errors.useremail?.message ?? ''}
        />
        <Input
          control={control}
          name={TextStrings.SignUpFormInut3Name}
          formType="default"
          placeholder={TextStrings.SignUpFormInut3placeholder}
          maxLength={SignUpFormDimensions.inputMLengthXL}
          secureTextEntry
          error={errors.userpassword?.message ?? ''}
        />
        {registrationError && (
          <SignUpErrorText>{registrationError}</SignUpErrorText>
        )}
      </FormWrapper>
      <SignUpButtonContainer>
        <Button
          width={SignUpFormDimensions.buttonWidth}
          height={SignUpFormDimensions.buttonHeight}
          bgColor={LightTheme.signUpButton}
          bRadius={SignUpFormDimensions.buttonBRadius}
          onPress={handleSubmit(handleSubmitForm)}
        >
          <SignUpText>{TextStrings.SignUpFormButton}</SignUpText>
        </Button>
      </SignUpButtonContainer>
    </View>
  );
}
