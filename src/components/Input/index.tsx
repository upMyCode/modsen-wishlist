import LightTheme from '@theme/allTheme';
import React from 'react';
import { Controller, FieldValues } from 'react-hook-form';
import { View } from 'react-native';

import { CustomInput, FormContainer, InputErrorText, Wrapper } from './styles';
import type { InputProps } from './types';

export default function Input<T extends FieldValues>({
  formType,
  maxLength,
  placeholder,
  control,
  name,
  secureTextEntry,
  error,
}: InputProps<T>) {
  return (
    <Wrapper>
      <FormContainer>
        <Controller
          control={control}
          name={name}
          render={({ field: { value, onChange, onBlur } }) => {
            return (
              <View>
                <CustomInput
                  editable
                  value={value}
                  onChangeText={onChange}
                  maxLength={maxLength}
                  placeholder={placeholder}
                  keyboardType={formType}
                  placeholderTextColor={LightTheme.placeholder}
                  secureTextEntry={secureTextEntry}
                  onBlur={onBlur}
                  autoCapitalize="none"
                />
              </View>
            );
          }}
        />
        {error && <InputErrorText>{error}</InputErrorText>}
      </FormContainer>
    </Wrapper>
  );
}
