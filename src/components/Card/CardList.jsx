import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Card } from './Card'

const CardList = ({ cards }) => {
	return (
		<Container className="px-0">
			<Row className="g-4">
				{cards.map(card => (
					<Col sm={12} md={4} lg={3} key={card.id}>
						<Card {...card} />
					</Col>
				))}
			</Row>
		</Container>
	)
}

export { CardList }
