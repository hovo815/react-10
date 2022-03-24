import { all, fork } from 'redux-saga/effects';

import * as index from './index'

export default function* root() {
    yield all([
        fork(index.watchAddUsers),
        fork(index.watchDeleteUser),
    ]);
}