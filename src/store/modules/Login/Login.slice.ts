import { createSlice } from '@reduxjs/toolkit';

export interface LoginState {
  isLogin: boolean;
}

const initialState: LoginState = {
  isLogin: false,
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    loginRequest: () => {
      console.log('Login Request');
    },
    loginSuccess: (state) => {
      console.log('Login Success');
      state.isLogin = true;
    },
    loginFailed: () => {
      console.log('Login Failed');
    },
  },
});

export const { loginRequest, loginSuccess, loginFailed } = loginSlice.actions;

export default loginSlice.reducer;
