import { all, AllEffect, call, ForkEffect, spawn } from 'redux-saga/effects';

import loginSaga from 'store/modules/Login/Login.saga';

const sagas: (() => Generator<ForkEffect<never>, void, unknown>)[] = [loginSaga];

export default function* rootSaga(): Generator<AllEffect<ForkEffect<void>>, void, unknown> {
  yield all(
    // eslint-disable-next-line func-names
    sagas.map((saga) => spawn(function* () {
      while (true) {
        try {
          yield call(saga);
          break;
        } catch (error) {
          // eslint-disable-next-line no-console
          console.error(error);
        }
      }
    })),
  );
}
