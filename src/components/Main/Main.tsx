import DocsList from './DocsList'
import Toolbar from './Toolbar/Toolbar'

export default function Main() {
	return (
		<div className="d-flex mt-5 me-3">
			<Toolbar />
			<DocsList />
		</div>
	)
}
