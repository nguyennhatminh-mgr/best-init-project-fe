import { combineReducers } from 'redux';

import loginReducer from 'store/modules/Login/Login.slice';

const rootReducer = combineReducers({
  loginReducer,
});

export default rootReducer;
