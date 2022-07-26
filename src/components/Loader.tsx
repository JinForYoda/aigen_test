import Spinner from 'react-bootstrap/esm/Spinner'

export default function Loader() {
	return (
		<div className="w-100 d-flex justify-content-center">
			<Spinner animation="border" role="status">
				<span className="visually-hidden">Loading...</span>
			</Spinner>
		</div>
	)
}
