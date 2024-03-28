import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { counterSlice } from '@/features/counter/counterSlice'
import { puzzleSlice } from '@/features/puzzle/store/puzzleSlice'

const reducers = combineReducers({
  puzzle: puzzleSlice.reducer,
  counter: counterSlice.reducer,
})

// TODO: persistConfig with redux-persist

export const makeStore = () => {
  return configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
