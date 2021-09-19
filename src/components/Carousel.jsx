import BsCarousel from 'react-bootstrap/Carousel'

const Carousel = () => {
	return (
		<BsCarousel prevIcon={false} nextIcon={false}>
			<BsCarousel.Item>
				<img className="w-100" src="/img/carousel-1.jpg" alt="First slide" />
			</BsCarousel.Item>
			<BsCarousel.Item>
				<img className="w-100" src="/img/carousel-2.jpg" alt="Second slide" />
			</BsCarousel.Item>
			<BsCarousel.Item>
				<img className="w-100" src="/img/carousel-3.jpg" alt="Third slide" />
			</BsCarousel.Item>
		</BsCarousel>
	)
}

export { Carousel }
