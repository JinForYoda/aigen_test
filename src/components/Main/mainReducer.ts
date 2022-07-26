import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { MainFetch } from './mainFetch'
import { MainTypes } from './mainTypes'

const initialState: MainTypes.MainReducerState = {
	docsList: [],
	filtredDocsList: [],
	search: { date: '', title: '', id: '' },
	sort: { direction: 'desc', value: 'id' },
	isLoading: false,
}

export const docsList = createSlice({
	name: MainTypes.MAIN_REDUCER,
	initialState,
	reducers: {
		setSearch(state, action: PayloadAction<MainTypes.SeacrhPayload>) {
			const key = action.payload.key
			if (key === 'id') {
				state.search[key] = action.payload.value
			} else {
				state.search[key] = action.payload.value
			}
		},
		setSort(state, action: PayloadAction<MainTypes.MainSort>) {
			if (!!action.payload.value) state.sort.value = action.payload.value
			if (!!action.payload.direction) state.sort.direction = action.payload.direction
		},
		filterDocsList(state) {
			// поиск
			if (!!state.search.id) {
				state.filtredDocsList = state.docsList.filter((doc) => doc.id.toString() === state.search.id)
			} else {
				state.filtredDocsList = state.docsList.filter((doc) =>
					Object.keys(state.search).every((key) => {
						if (key === 'id') return true
						const docKey = key as keyof Omit<MainTypes.MainSearch, 'id'>
						return doc[docKey].toLowerCase().includes(state.search[docKey])
					})
				)
			}

			// сортировка
			const value = state.sort.value
			const isDesc = state.sort.direction === 'desc'
			if (value === 'id')
				state.filtredDocsList.sort((a, b) => {
					const first = a[value] as number
					const second = b[value] as number
					return isDesc ? second - first : first - second
				})
			else if (value === 'title' || value === 'date') {
				state.filtredDocsList.sort((a, b) =>
					isDesc ? b[value].localeCompare(a[value]) : a[value].localeCompare(b[value])
				)
			}
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(MainFetch.getDocsList.pending, (state) => {
				state.isLoading = true
			})
			.addCase(MainFetch.getDocsList.fulfilled, (state, action: PayloadAction<MainTypes.DocsList>) => {
				state.isLoading = false
				state.docsList = [...action.payload]
			})
	},
})
export const { setSearch, setSort, filterDocsList } = docsList.actions
export default docsList.reducer
