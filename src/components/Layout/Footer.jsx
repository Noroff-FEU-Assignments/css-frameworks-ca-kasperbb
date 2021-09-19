import Container from 'react-bootstrap/Container'

const Footer = () => {
	return (
		<footer className="bg-white">
			<Container className="py-3 d-flex justify-content-between">
				<div className="social">
					<svg
						aria-hidden="true"
						focusable="false"
						data-prefix="fab"
						data-icon="vimeo-v"
						className="social__icon"
						role="img"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 448 512"
					>
						<path
							fill="currentColor"
							d="M447.8 153.6c-2 43.6-32.4 103.3-91.4 179.1-60.9 79.2-112.4 118.8-154.6 118.8-26.1 0-48.2-24.1-66.3-72.3C100.3 250 85.3 174.3 56.2 174.3c-3.4 0-15.1 7.1-35.2 21.1L0 168.2c51.6-45.3 100.9-95.7 131.8-98.5 34.9-3.4 56.3 20.5 64.4 71.5 28.7 181.5 41.4 208.9 93.6 126.7 18.7-29.6 28.8-52.1 30.2-67.6 4.8-45.9-35.8-42.8-63.3-31 22-72.1 64.1-107.1 126.2-105.1 45.8 1.2 67.5 31.1 64.9 89.4z"
						></path>
					</svg>

					<svg
						aria-hidden="true"
						focusable="false"
						data-prefix="fab"
						data-icon="youtube"
						className="social__icon"
						role="img"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 576 512"
					>
						<path
							fill="currentColor"
							d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"
						></path>
					</svg>
				</div>
				<p className="mb-0">hello@yay.com</p>
				<p className="mb-0">Copyright 2020</p>
			</Container>
		</footer>
	)
}

export { Footer }
