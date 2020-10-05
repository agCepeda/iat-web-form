import React from 'react';
import { Provider } from 'react-redux';
import configureStore from '../config/configureStore';
import { PersistGate } from 'redux-persist/integration/react';

const persist = configureStore(() => {});

export const ReduxService = (Component) => {
    return (props) => (
        <Provider store={persist.store}>
            <PersistGate loading={null} persistor={persist.persistor}>
                <Component {...props} />
            </PersistGate>
        </Provider>
    );
}
export const store = persist.store;
