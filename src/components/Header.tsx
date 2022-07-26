import Container from 'react-bootstrap/esm/Container'
import Navbar from 'react-bootstrap/esm/Navbar'
import logo from '../images/GitHub-Mark-64px.png'
export default function Header() {
	return (
		<Navbar bg="dark" variant="dark" style={{ height: '10vh' }}>
			<Container className="justify-content-between">
				<h5 className="text-white">Поиск документов</h5>
				<Navbar.Brand
					href="https://github.com/JinForYoda"
					target="_blank"
					className="d-flex align-items-center gap-3"
				>
					<h4>JinForYoda</h4>{' '}
					<img alt="" src={logo} width="64" height="64" className="d-inline-block align-center text-white" />
				</Navbar.Brand>
			</Container>
		</Navbar>
	)
}
