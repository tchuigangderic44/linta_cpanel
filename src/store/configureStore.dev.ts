import { applyMiddleware, configureStore } from '@reduxjs/toolkit'
import { rootReducer } from './reducers'
import thunk from 'redux-thunk'

const configureCustomStore = (preloadedState?: any) => {
    const store = configureStore(
        {
            reducer: rootReducer, middleware: [thunk]
        },
    )

    return store
}

export default configureCustomStore 