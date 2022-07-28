import { AuthState } from './AuthContext';

type AuthAction =
  | { type: 'signIn' }
  | { type: 'logout' }
  | { type: 'changeFabIcon', payload: string }
  | { type: 'changeUserName', payload: string };

export const authReducer = (state: AuthState, action: AuthAction): AuthState => {

  switch (action.type) {
    case 'signIn':

      return {
        ...state,
        isLoggedIn: true,
        username: 'no-user-name'
      };

    case 'logout':

      return {
        ...state,
        isLoggedIn: false,
        username: undefined,
        favoriteIcon: undefined
      };

    case 'changeFabIcon':

      return {
        ...state,
        favoriteIcon: action.payload
      };

    case 'changeUserName':

      return {
        ...state,
        username: action.payload
      };

    default:
      return state;
  }
}