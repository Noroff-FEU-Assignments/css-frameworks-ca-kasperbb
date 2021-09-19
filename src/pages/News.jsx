import Container from 'react-bootstrap/Container'
import Pagination from 'react-bootstrap/Pagination'
import { CardList } from '../components/Card/CardList'

const cards = [1, 2, 3, 4, 5, 6, 7, 8].map(num => {
	return {
		id: num,
		title: 'Nunc porttitor vel',
		text: 'Nunc malesuada eget est fringilla dapibus.',
		image: `/img/news-${num}.jpg`,
	}
})

const News = () => {
	return (
		<Container>
			<h1 className="text-primary mt-5">News</h1>
			<Pagination className="py-4 mb-0">
				{[1, 2, 3, 4].map(num => (
					<Pagination.Item key={num} active={num === 1}>
						{num}
					</Pagination.Item>
				))}
			</Pagination>

			<CardList cards={cards} />

			<Pagination className="py-4 mb-5">
				{[1, 2, 3, 4].map(num => (
					<Pagination.Item key={num} active={num === 1}>
						{num}
					</Pagination.Item>
				))}
			</Pagination>
		</Container>
	)
}

export { News }
