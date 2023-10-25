import type { FirebaseAuthTypes } from '@react-native-firebase/auth';

export interface USER {
  id: string;
  username: string;
  useremail: string;
}

export interface Error {
  code: string;
  message: string;
}

export type UserProfile = FirebaseAuthTypes.AdditionalUserInfo['profile'];
