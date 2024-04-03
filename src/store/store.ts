import { combineReducers, configureStore } from '@reduxjs/toolkit'
import {
  persistReducer,
  persistStore,
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist'
import { historySlice } from '@/features/puzzle/store/historySlice'
import { puzzleSlice } from '@/features/puzzle/store/puzzleSlice'
import { modalSlice } from '@/features/modal/store/modalSlice'
import createWebStorage from 'redux-persist/es/storage/createWebStorage'

// redux-persist failed to create sync storage issue fix
const createNoopStorage = () => {
  return {
    getItem(_key: string) {
      return Promise.resolve(null)
    },
    setItem(_key: string, value: string) {
      return Promise.resolve(value)
    },
    removeItem(_key: string) {
      return Promise.resolve()
    },
  }
}

const storage =
  typeof window === 'undefined'
    ? createNoopStorage()
    : createWebStorage('local')

const persistConfig = {
  key: 'puzzle-history',
  storage,
  whitelist: ['history'],
}

const reducers = combineReducers({
  puzzle: puzzleSlice.reducer,
  history: historySlice.reducer,
  modal: modalSlice.reducer,
})

const makeConfiguredStore = () =>
  configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
          ignoredPaths: ['puzzle.puzzle'],
        },
      }),
  })

export const makeStore = () => {
  const isServer = typeof window === 'undefined'

  if (isServer) {
    return makeConfiguredStore()
  }

  const persistedReducers = persistReducer(persistConfig, reducers)

  const store: any = configureStore({
    reducer: persistedReducers,
  })

  store.__persistor = persistStore(store)
  return store
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
