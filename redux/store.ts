import appSlice from '@/redux/slices/appSlice'
import compilerSlice from '@/redux/slices/compilerSlice'
import { configureStore } from '@reduxjs/toolkit'

export const makeStore = () => {
          return configureStore({
                    reducer: {
                              compilerSlice,
                              appSlice,
                    }
          })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']