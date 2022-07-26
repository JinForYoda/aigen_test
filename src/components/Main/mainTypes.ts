export namespace MainTypes {
	export interface MainReducerState {
		docsList: DocsList
		filtredDocsList: DocsList
		search: MainSearch
		sort: MainSort
		isLoading: boolean
	}

	export interface DocItem {
		id: number | string
		title: string
		description: string
		date: string
	}

	export type DocsList = DocItem[]

	export type MainSearch = Pick<DocItem, 'title' | 'date' | 'id'>

	export interface SeacrhPayload {
		key: keyof MainSearch
		value: string
	}

	export enum SortValuesEnum {
		id = 'id',
		date = 'date',
		title = 'title',
	}

	export enum SortDirectionsEnum {
		desc = 'desc',
		asc = 'asc',
	}

	export interface MainSort {
		direction?: keyof typeof SortDirectionsEnum
		value?: keyof typeof SortValuesEnum
	}

	export const MAIN_REDUCER = 'mainReducer'

	export const GET_DOCS_LIST = MAIN_REDUCER + '/getDocsList'
}
