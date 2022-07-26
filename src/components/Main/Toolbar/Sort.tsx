import { useAppDispatch, useAppSelector } from 'app/hooks'
import { useEffect } from 'react'
import Form from 'react-bootstrap/esm/Form'
import { filterDocsList, setSort } from '../mainReducer'
import { MainTypes } from '../mainTypes'

export default function Sort() {
	const dispatch = useAppDispatch()
	const sort = useAppSelector((state) => state.docsList.sort)

	useEffect(() => {
		dispatch(filterDocsList())
	}, [dispatch, sort])

	return (
		<Form.Group className="mb-3">
			<Form.Label>Сортировка</Form.Label>
			<div className="d-flex justify-content-between gap-5">
				<Form.Select
					defaultValue={MainTypes.SortValuesEnum[sort.value as keyof typeof MainTypes.SortValuesEnum]}
					onChange={(e) => {
						const value = e.currentTarget.value as keyof typeof MainTypes.SortValuesEnum
						dispatch(setSort({ value: value }))
					}}
				>
					<option value={MainTypes.SortValuesEnum.id}>ID документа</option>
					<option value={MainTypes.SortValuesEnum.date}>Создан</option>
					<option value={MainTypes.SortValuesEnum.title}>Название документа</option>
				</Form.Select>
				<Form.Select
					defaultValue={
						MainTypes.SortDirectionsEnum[sort.direction as keyof typeof MainTypes.SortDirectionsEnum]
					}
					onChange={(e) => {
						const direction = e.currentTarget.value as keyof typeof MainTypes.SortDirectionsEnum
						dispatch(setSort({ direction: direction }))
					}}
				>
					<option value={MainTypes.SortDirectionsEnum.desc}>По убыванию</option>
					<option value={MainTypes.SortDirectionsEnum.asc}>По возрастанию</option>
				</Form.Select>
			</div>
		</Form.Group>
	)
}
