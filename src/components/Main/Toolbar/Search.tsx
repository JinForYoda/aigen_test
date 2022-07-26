import { useAppDispatch, useAppSelector } from 'app/hooks'
import { useEffect } from 'react'
import Form from 'react-bootstrap/esm/Form'
import { filterDocsList, setSearch } from '../mainReducer'

export default function Search() {
	const dispatch = useAppDispatch()
	const search = useAppSelector((state) => state.docsList.search)

	useEffect(() => {
		dispatch(filterDocsList())
	}, [dispatch, search])

	return (
		<>
			<Form.Group className="mb-3 " controlId="formID">
				<Form.Label>
					<h5>ID документа</h5>
				</Form.Label>
				<Form.Control
					type="number"
					placeholder="Введите ID"
					value={search.id}
					onChange={(e) => {
						dispatch(setSearch({ key: 'id', value: e.target.value }))
					}}
				/>
				{!!search.id && (
					<Form.Text className="text-danger">
						<span>
							Если заполнено поле <b>ID документа</b>, все остальные поля будут проигнорированы
						</span>
					</Form.Text>
				)}
			</Form.Group>
			<Form.Group className="mb-3" controlId="formDate">
				<Form.Label>
					<h5>Создан</h5>
				</Form.Label>
				<Form.Control
					type="text"
					placeholder="Введите дату создания"
					value={search.date}
					onChange={(e) => {
						dispatch(setSearch({ key: 'date', value: e.target.value }))
					}}
					disabled={!!search.id}
				/>

				<Form.Text className="text-muted">YYYY/MM/DD</Form.Text>
			</Form.Group>
			<Form.Group className="mb-3" controlId="formTitle">
				<Form.Label>
					<h5>Название документа</h5>
				</Form.Label>
				<Form.Control
					type="text"
					placeholder="Введите название документа"
					value={search.title}
					onChange={(e) => {
						dispatch(setSearch({ key: 'title', value: e.target.value }))
					}}
					disabled={!!search.id}
				/>
			</Form.Group>
		</>
	)
}
