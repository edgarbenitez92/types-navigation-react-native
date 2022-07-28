import React, { createContext, useReducer } from "react";
import { authReducer } from "./authReducer";

export interface AuthState {
  isLoggedIn: boolean;
  username?: string;
  favoriteIcon?: string;
}

// Estado inicial
export const authInitialState: AuthState = {
  isLoggedIn: false
}

// Se le dice a React como luce y qué expone el context
export interface AuthContextProps {
  authState: AuthState;
  signIn: () => void;
  logout: () => void;
  changeFavoriteIcon: (name: string) => void;
  changeUserName: (name: string) => void;
}

// Crear contexto
export const AuthContext = createContext({} as AuthContextProps);

// Componente proveedor del estado

// export const AuthProvider = ({children}: { children: JSX.Element[]}) => {
export const AuthProvider = ({ children }: any) => {

  const [authState, dispatch] = useReducer(authReducer, authInitialState)

  const signIn = () => {
    dispatch({ type: 'signIn' });
  }

  const logout = () => {
    dispatch({ type: 'logout' });
  }

  const changeFavoriteIcon = (name: string) => {
    dispatch({ type: 'changeFabIcon', payload: name });
  }

  const changeUserName = (name: string) => {
    dispatch({ type: 'changeUserName', payload: name });
  }

  return (
    <AuthContext.Provider value={{
      authState,
      signIn,
      logout,
      changeFavoriteIcon,
      changeUserName
    }}>
      {children}
    </AuthContext.Provider>
  )
}