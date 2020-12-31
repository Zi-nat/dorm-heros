import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Persistor } from '../redux/store';

const customProvider = ({ store, children }) => (
    <Provider store={store}>
        <PersistGate loading={null} persistor={Persistor}>
            {children}
        </PersistGate>
    </Provider>
);

customProvider.propTypes = {
    store: PropTypes.object,
    children: PropTypes.object,
};

export default customProvider;
