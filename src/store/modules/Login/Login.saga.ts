import { AuthAPI } from 'apis';
import { call, CallEffect, ForkEffect, put, PutEffect, takeLatest } from 'redux-saga/effects';
import { loginRequest, loginSuccess, loginFailed } from './Login.slice';

function* loginSaga(): Generator<
  | CallEffect<{
      data: number;
    }>
  | PutEffect<{
      payload: undefined;
      type: string;
    }>,
  void,
  unknown
> {
  try {
    const result = yield call(AuthAPI.login);
    console.log(result);
    yield put(loginSuccess());
  } catch (error) {
    yield put(loginFailed());
  }
}

export default function* authSaga(): Generator<ForkEffect<never>, void, unknown> {
  yield takeLatest(loginRequest, loginSaga);
}
