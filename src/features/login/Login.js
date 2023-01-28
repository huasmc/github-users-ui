import { memo } from "react";
import { Button, Container, Form, InputGroup, Row } from "react-bootstrap";
import { UI_STRINGS } from "../../common/UI_STRINGS.js";

const Login = () => {
	return (
		<div className="login-container center">
			<Container>
				<Row>
					<h5>{UI_STRINGS.LOGIN}</h5>
				</Row>
				<Row>
					<InputGroup className="mb-3">
						<Form.Control
							placeholder="Username"
							aria-label="Username"
							aria-describedby="basic-addon1"
						/>
					</InputGroup>
				</Row>
				<Row>
					<InputGroup className="mb-3">
						<Form.Control
							placeholder="Password"
							aria-label="Password"
							aria-describedby="basic-addon1"
						/>
					</InputGroup>
				</Row>
				<Row>
					<Button className="button">{UI_STRINGS.LOGIN}</Button>
				</Row>
			</Container>
		</div>
	);
};

export default memo(Login);
