import { useAppDispatch, useAppSelector } from 'app/hooks'
import Loader from 'components/Loader'
import { useEffect } from 'react'
import { MainFetch } from './mainFetch'
import { filterDocsList } from './mainReducer'
import Row from './Row'
export default function DocsList() {
	const dispatch = useAppDispatch()

	const docsList = useAppSelector((state) => state.docsList.docsList)
	const filtredDocsList = useAppSelector((state) => state.docsList.filtredDocsList)
	const isLoading = useAppSelector((state) => state.docsList.isLoading)

	useEffect(() => {
		dispatch(MainFetch.getDocsList())
	}, [dispatch])

	useEffect(() => {
		dispatch(filterDocsList())
	}, [dispatch, docsList])

	return (
		<div className="w-100" style={{ height: '84vh', overflow: 'auto' }}>
			{isLoading ? (
				<Loader />
			) : !filtredDocsList.length ? (
				<h4 className="d-flex justify-content-center">Не найдено</h4>
			) : (
				filtredDocsList.map((doc) => <Row doc={doc} key={doc.id} />)
			)}
		</div>
	)
}
