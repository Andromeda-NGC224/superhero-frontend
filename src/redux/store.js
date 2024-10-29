import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import superheroesReducer from "./superheroesSlice.js";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  whitelist: ["superheroes"],
};

const persistedSuperheroesReducer = persistReducer(
  persistConfig,
  superheroesReducer
);

export const store = configureStore({
  reducer: {
    superheroes: persistedSuperheroesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
