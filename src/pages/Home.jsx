import Container from 'react-bootstrap/Container'
import { Carousel } from '../components/Carousel'
import { TabCard } from '../components/TabCard'

const Home = () => {
	return (
		<>
			<Carousel />

			<Container className="mt-5">
				<h1 className="text-primary mb-3">We do YAY things</h1>
				<p className="text-secondary">
					Nam tincidunt, sapien nec congue porta, tellus risus ullamcorper mi, a rutrum justo eros pretium
					libero. Nullam vel enim id mauris eleifend finibus et ac orci. Aliquam metus massa, aliquam quis
					arcu sit amet, consectetur faucibus urna. Suspendisse massa diam, efficitur eu massa euismod,
					pretium lacinia magna. Donec mi orci, sollicitudin in luctus a, varius eget massa.
				</p>
			</Container>

			<TabCard />
		</>
	)
}

export { Home }
