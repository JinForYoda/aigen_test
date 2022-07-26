import { Container, Form } from 'react-bootstrap'
import Search from './Search'
import Sort from './Sort'

export default function Toolbar() {
	return (
		<Container className="w-50">
			<Form className="d-flex flex-column gap-3" onSubmit={(e) => e.preventDefault()}>
				<Search />
				<Sort />
			</Form>
		</Container>
	)
}
