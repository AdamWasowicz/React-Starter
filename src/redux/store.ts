import { configureStore } from '@reduxjs/toolkit';
import appSlice from './features/app-slice';

//Store
export const store = configureStore({
    reducer: {
        // Add reducers here
        // Map them in template: sliceName: slice
        app: appSlice,
    }
})


export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;