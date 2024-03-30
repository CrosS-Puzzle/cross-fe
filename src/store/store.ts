import { combineReducers, configureStore } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'
import { puzzleSlice } from '@/features/puzzle/store/puzzleSlice'
import { historySlice } from '@/features/puzzle/store/historySlice'
import { persistReducer, persistStore } from 'redux-persist'
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist'

const persistConfig = {
  key: 'puzzle-history',
  storage,
  whitelist: ['history'],
}

const reducers = combineReducers({
  puzzle: puzzleSlice.reducer,
  history: historySlice.reducer,
})

const makeConfiguredStore = () =>
  configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  })

export const makeStore = () => {
  const isServer = typeof window === 'undefined'

  if (isServer) {
    return makeConfiguredStore()
  } else {
    const persistedReducers = persistReducer(persistConfig, reducers)

    let store: any = configureStore({
      reducer: persistedReducers,
    })

    store.__persistor = persistStore(store)
    return store
  }
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
