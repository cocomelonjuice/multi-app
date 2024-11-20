import { configureStore } from "@reduxjs/toolkit";
import {persistStore, persistReducer, FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE} from "redux-persist";
import storage from 'redux-persist/lib/storage';
import createSagaMiddleware from "redux-saga";
import displayInfoSaga from "./saga";
import infoReducer from './reducer';
import taskReducer from "./taskreducer";

const persistConfig = {
    key: 'root',
    storage: storage,
};

const persistedReducer = persistReducer(persistConfig,taskReducer);//taskSlice.reducer// taskReducer

// Create Saga Middleware
const sagaMiddleware = createSagaMiddleware();

// Create store
const store = configureStore({ 

    // Add reducer
    reducer: {
        infoReducer: infoReducer,  
        taskReducer:persistedReducer
        //taskReducer: taskReducer,
        //persistReducer: persistedReducer,
    },

    // Add Saga to middleware
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }).concat(sagaMiddleware),
});

// Run Saga Middleware
sagaMiddleware.run(displayInfoSaga);{/*watcher*/} 

export type AppDispatch = typeof store.dispatch

export type iniStateType = {
    infoReducer: typeof infoReducer 
    taskReducer: typeof taskReducer
}

//export type RootState = ReturnType <typeof store.getState>
export default store;
export const persistor = persistStore(store);

