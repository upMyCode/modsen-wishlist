/* eslint-disable import/no-unresolved */
import { API_KEY_DATABASE } from '@env';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { firebase } from '@react-native-firebase/database';

import type { Error } from './types';

function isError(candidate: unknown): candidate is Error {
  if (candidate && typeof candidate === 'object' && 'code' in candidate) {
    return true;
  }
  return false;
}

export const handleSignUpAPI = async (
  email: string,
  password: string,
  name: string
): Promise<FirebaseAuthTypes.User | null | string> => {
  try {
    const isUserCreated = await auth().createUserWithEmailAndPassword(
      email,
      password
    );

    if (isUserCreated) {
      const authReference = firebase
        .app()
        .database(API_KEY_DATABASE)
        .ref(`/users/${isUserCreated.user.uid}`);

      if (authReference) {
        await authReference.set({
          id: isUserCreated.user.uid,
          username: name,
          useremail: email,
        });

        return isUserCreated.user;
      }
    }

    return null;
  } catch (error: unknown) {
    if (isError(error)) {
      return error.code;
    }
    return '';
  }
};

export default handleSignUpAPI;
