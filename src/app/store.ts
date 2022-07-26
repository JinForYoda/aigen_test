import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import docsList from 'components/Main/mainReducer'

export const store = configureStore({
	reducer: {
		docsList: docsList,
	},
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>
