import { createStore, applyMiddleware } from "redux";
import createSagaMiddleWare from "redux-saga";
import appReducer from "../reducers";
import { rootSaga } from "../saga";

const sagaMiddleWare = createSagaMiddleWare();
const store = createStore(appReducer, applyMiddleware(sagaMiddleWare));

sagaMiddleWare.run(rootSaga);

export default store;
