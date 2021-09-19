import './styles/styles.scss'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Home } from './pages/Home'
import { News } from './pages/News'
import { Contact } from './pages/Contact'
import { Header } from './components/Layout/Header'
import { Footer } from './components/Layout/Footer'

const App = () => {
	return (
		<>
			<Router>
				<div className="wrapper">
					<Header />
					<main>
						<Switch>
							<Route path="/" exact component={Home} />
							<Route path="/news" component={News} />
							<Route path="/contact" component={Contact} />
						</Switch>
					</main>
				</div>
				<Footer />
			</Router>
		</>
	)
}

export default App
