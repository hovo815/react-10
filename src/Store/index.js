import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';
import rootSaga from './sagas/sagas';



const logger = store => next => action => {
    console.log('dispatching', action)
    let result = next(action)
    console.log('next state', store.getState())
    return result
}

const sagaMiddleware = createSagaMiddleware()


const store = createStore(
    rootReducer,
    applyMiddleware(logger, sagaMiddleware)
)

sagaMiddleware.run(rootSaga)

export default store;