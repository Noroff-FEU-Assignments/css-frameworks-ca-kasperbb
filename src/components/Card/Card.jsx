import BsCard from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const Card = ({ image, title, text }) => {
	return (
		<BsCard className="card">
			<BsCard.Img className="card__image" variant="top" src={image} />
			<BsCard.Body className="card__body">
				<BsCard.Title className="card__title">{title}</BsCard.Title>
				<BsCard.Text className="card__text">{text}</BsCard.Text>
				<Button className="card__button w-100 border-0" variant="primary">
					MORE
				</Button>
			</BsCard.Body>
		</BsCard>
	)
}

export { Card }
