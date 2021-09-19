import { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import Accordion from 'react-bootstrap/Accordion'

const tabs = [
	{
		id: 'first',
		title: 'First',
		image: '/img/tab-1.jpg',
		description:
			'Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus.',
	},
	{
		id: 'second',
		title: 'Second',
		image: '/img/tab-2.jpg',
		description:
			'Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus.',
	},
	{
		id: 'third',
		title: 'Third',
		image: '/img/tab-3.jpg',
		description:
			'Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus.',
	},
]

const TabCard = () => {
	const [currentTab, setCurrentTab] = useState('first')

	return (
		<>
			<Container className="mt-5 mb-5 d-none d-md-block">
				<Tabs defaultActiveKey="first" id="tabs" onSelect={k => setCurrentTab(k)} className="tabs">
					{tabs.map(tab => (
						<Tab
							eventKey={tab.id}
							title={tab.title}
							key={tab.id}
							className="tabs__content"
							style={{
								borderRadius: currentTab === 'first' ? '0 10px 10px 10px' : '10px',
							}}
						>
							<div className="d-flex h-auto">
								<img className="me-4" src={tab.image} alt="" style={{ height: '150px' }} />
								<div className="d-flex flex-column">
									<p className="text-secondary flex-grow-1">{tab.description}</p>
									<dl className="d-flex align-items-center gap-3 text-dark mt-4">
										<p className="m-0 text-dark">SHARE</p>

										<dt className="sr-only">Share on Facebook</dt>
										<dd>
											<svg
												aria-hidden="true"
												focusable="false"
												data-prefix="fab"
												data-icon="facebook-f"
												className="tabCard__icon"
												role="img"
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 320 512"
											>
												<path
													fill="currentColor"
													d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
												></path>
											</svg>
										</dd>

										<dt className="sr-only">Share on Twitter</dt>
										<dd>
											<svg
												aria-hidden="true"
												focusable="false"
												data-prefix="fab"
												data-icon="twitter"
												className="tabCard__icon"
												role="img"
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 512 512"
											>
												<path
													fill="currentColor"
													d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
												></path>
											</svg>
										</dd>
									</dl>
								</div>
							</div>
						</Tab>
					))}
				</Tabs>
			</Container>

			<Container className="mt-5 mb-5 d-block d-md-none">
				<Accordion defaultActiveKey="first">
					{tabs.map(tab => (
						<Accordion.Item eventKey={tab.id} key={tab.id}>
							<Accordion.Header>{tab.title}</Accordion.Header>
							<Accordion.Body>
								<Container>
									<p className="text-secondary">{tab.description}</p>
									<img className="d-block w-100" src={tab.image} alt="" />
									<div className="d-flex justify-content-center">
										<dl className="d-flex align-items-center gap-3 text-dark mt-4">
											<p className="m-0 text-dark">SHARE</p>

											<dt className="sr-only">Share on Facebook</dt>
											<dd>
												<svg
													aria-hidden="true"
													focusable="false"
													data-prefix="fab"
													data-icon="facebook-f"
													className="tabCard__icon"
													role="img"
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 320 512"
												>
													<path
														fill="currentColor"
														d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
													></path>
												</svg>
											</dd>

											<dt className="sr-only">Share on Twitter</dt>
											<dd>
												<svg
													aria-hidden="true"
													focusable="false"
													data-prefix="fab"
													data-icon="twitter"
													className="tabCard__icon"
													role="img"
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 512 512"
												>
													<path
														fill="currentColor"
														d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
													></path>
												</svg>
											</dd>
										</dl>
									</div>
								</Container>
							</Accordion.Body>
						</Accordion.Item>
					))}
				</Accordion>
			</Container>
		</>
	)
}

export { TabCard }
