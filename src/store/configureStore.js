import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from '../reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';

export default function configureStore(initialState) {
    const composeEnhancers =
        typeof window === 'object' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
            window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) :
            compose

    const middleware = [
        thunk,
        reduxImmutableStateInvariant()
    ]

    const enhancer = composeEnhancers(
        applyMiddleware(...middleware)
    )

    return createStore(
        rootReducer,
        initialState,
        enhancer
    )
}
