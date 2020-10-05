import { applyMiddleware, compose, createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage';
import rootReducer from '../reducers'
import promise from "../promise";
import devTools from "remote-redux-devtools";

const persistConfig = {
    key: 'root',
    storage: storage,
    blacklist: ['serverResponderState'],
    timeout: null,
};

const logger = createLogger();

const enhancer = compose(
    applyMiddleware(thunk, promise, logger),
    devTools({
        name: 'linkMe', realtime: true,
    }),
);

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default function configureStore(onCompletion) {
    let store = createStore(persistedReducer, enhancer);
    let persistor = persistStore(store);
    return { store, persistor }
}
