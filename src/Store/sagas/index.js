import { put, takeEvery, call, select } from 'redux-saga/effects';
import { add } from '../actions/memberActions'

const Actions = {
   AddUserRequest: 'add_user_request',
   deleteUser: 'delete_user'
}

export const AddUserRequest = payload => ({ payload, type: Actions.AddUserRequest });
export const DeleteUserRequest = payload => ({ payload, type: Actions.deleteUser });

function* rootSaga() {
   console.log('saga ready');
}

function* createUser({ payload }) {
   try {
      let users = localStorage.getItem('users')
      users = JSON.parse(users)
      if (users) {
         users.push(payload);
         localStorage.setItem('users', JSON.stringify(users))
      }
      else {
         localStorage.setItem('users', JSON.stringify([payload]))
      }
      yield put(add(users))
   }
   catch ({ message }) {
      console.log(message)
   }
}

function* deleteUserById({ payload }) {
   try {
      let users = localStorage.getItem('users')
      users = JSON.parse(users)
      if (users) {

         users = users.filter(user => user.id !== payload)

         localStorage.setItem('users', JSON.stringify(users))
         yield put(add(users))
      }
   }
   catch ({ message }) {
      console.log(message)
   }
}



//*** WATCHERS ****

export function* watchAddUsers() {
   yield takeEvery(Actions.AddUserRequest, createUser);
}

export function* watchDeleteUser() {
   yield takeEvery(Actions.deleteUser, deleteUserById)
}

export default rootSaga;