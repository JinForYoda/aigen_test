import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './app/store'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

const container = document.getElementById('root')!
const root = createRoot(container)
const PROJECT_NAME = 'aigen_test'

root.render(
	<Provider store={store}>
		<BrowserRouter basename={'/' + PROJECT_NAME}>
			<App />
		</BrowserRouter>
	</Provider>
)
