import { RootState } from 'store/store';

export const statusLoginSelector = (state: RootState):boolean => state.loginReducer.isLogin;
