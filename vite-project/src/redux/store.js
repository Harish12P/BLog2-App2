import { configureStore, combineReducers } from "@reduxjs/toolkit";
import useReducer from "./user/userSlice";
import themeReducer from "./theme/themeSlice";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
// import { getDefaultMiddleware } from "@reduxjs/toolkit/dist/getDefaultMiddleware";

const rootReducer = combineReducers({
  user: useReducer,
  theme: themeReducer,
});

const persistConfig = {
  key: "root",
  storage,
  version: 1,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
  // {
  // user: useReducer,
  // },
});

export const persistor = persistStore(store);

//Redux Persist is a state management tool that allows the state in a Redux store to persist across browser and app sessions, improving user experience by pre-loading the store with persistent data. It also offers robustness against unexpected crashes and network issues, preventing data loss and offering a more reliable user experience.
