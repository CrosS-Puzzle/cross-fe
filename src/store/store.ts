import { combineReducers, configureStore } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'
import { counterSlice } from '@/features/counter/counterSlice'
import { puzzleSlice } from '@/features/puzzle/store/puzzleSlice'
import { historySlice } from '@/features/puzzle/store/historySlice'
import { persistReducer } from 'redux-persist'
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist/es/constants'

const reducers = combineReducers({
  puzzle: puzzleSlice.reducer,
  counter: counterSlice.reducer,
  history: historySlice.reducer,
})

const persistConfig = {
  key: 'puzzle-history',
  storage,
  whitelist: ['history'],
}

const persistedReducers = persistReducer(persistConfig, reducers)

export const makeStore = () => {
  return configureStore({
    reducer: persistedReducers,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
