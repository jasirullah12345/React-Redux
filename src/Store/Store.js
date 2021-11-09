import {applyMiddleware, createStore} from "redux";
import reducers from "./Reducers/Reducer";
// Middleware to run async functions
import thunk from "redux-thunk";
// Redux-Persist
import {persistStore, persistReducer} from "redux-persist";
// storage means LocalStorage
import storage from 'redux-persist/lib/storage'


// Middlewares
const middlewares = [thunk];

// Initial State
const intialState = {};

const persistConfig = {
    key: 'root',
    storage,
    // whitelist : ["amount"],
    // blacklist : ["amount"],
}

// Persist All Reducers
const persistedReducer = persistReducer(persistConfig, reducers)

// Create Store Using Persisted Reducers
const store = createStore(persistedReducer, intialState, applyMiddleware(...middlewares));

// Create persistor Using Store
const persistor = persistStore(store)

export {store, persistor}
