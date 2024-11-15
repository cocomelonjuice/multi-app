import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import displayInfoSaga from "./saga";
import infoReducer from './reducer';

// Create Saga Middleware
const sagaMiddleware = createSagaMiddleware();

// Create store
const store = configureStore({ 

    // Add reducer
    reducer: {
        infoReducer,
    },

    // Add Saga to middleware
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

// Run Saga Middleware
sagaMiddleware.run(displayInfoSaga);{/*watcher*/} 

export type AppDispatch = typeof store.dispatch

//export type RootState = ReturnType <typeof store.getState>
export default store;
