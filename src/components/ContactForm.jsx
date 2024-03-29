import { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'

const ContactForm = () => {
	const [checked, setChecked] = useState(true)

	return (
		<Form className="contact-form p-4 bg-light rounded">
			<Form.Group className="mb-3" controlId="name">
				<Form.Label>Name</Form.Label>
				<Form.Control type="text" className="border-0 py-3" />
			</Form.Group>

			<Form.Group className="mb-3" controlId="email">
				<Form.Label>Email address</Form.Label>
				<Form.Control type="email" className="border-0 py-3" />
			</Form.Group>

			{/* <Form.Group className="mb-3" controlId="website">
				<Form.Label>Website</Form.Label>
				<Form.Control type="text" className="border-0 py-3" />
			</Form.Group> */}

			<div className="mb-3">
				<Form.Label htmlFor="website">Website</Form.Label>
				<InputGroup>
					<InputGroup.Text
						className="border-0 py-3 text-white d-none d-md-block"
						style={{ backgroundColor: '#C7C7C7' }}
					>
						https://
					</InputGroup.Text>
					<FormControl id="website" className="border-0 py-3" />
				</InputGroup>
			</div>

			<Form.Group className="mb-3" controlId="message">
				<Form.Label>Message</Form.Label>
				<Form.Control as="textarea" rows={3} className="border-0 py-3" />
			</Form.Group>

			<div className="form-check p-0">
				<input
					type="checkbox"
					id="checkbox"
					className="form-check-input"
					checked={checked}
					onChange={() => setChecked(prev => !prev)}
				/>
				<label htmlFor="checkbox" className="form-check-label">
					<span id="fakebox"></span>
					Allow us to sell your personal details to whomever we want
				</label>
			</div>

			<Button
				variant="primary"
				type="submit"
				className="bg-secondary border-0 w-100 mt-4 py-2"
				style={{ fontSize: 22 }}
			>
				Submit
			</Button>
		</Form>
	)
}

export { ContactForm }
