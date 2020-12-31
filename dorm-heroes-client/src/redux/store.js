import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleWare from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import combinedReducers from './combinedReducers';
import combinedSagas from './combinedSagas';


const sagaMiddleware = createSagaMiddleWare();

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['account'],
    version: 1,
};


export default function configureStore() {
    const persistedReducer = persistReducer(persistConfig, combinedReducers);
    const Store = createStore(
        persistedReducer,
        applyMiddleware(sagaMiddleware),
    );

    sagaMiddleware.run(combinedSagas);
    const Persistor = persistStore(Store);

    return { Store, Persistor };
}

export const { Store, Persistor } = configureStore();
