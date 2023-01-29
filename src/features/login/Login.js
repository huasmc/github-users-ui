import { memo, useEffect, useState } from "react";
import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { UI_STRINGS } from "../../common/UI_STRINGS.js";
import GithubLogo from "../../assets/github.png";
import { validateEmail } from "../../utils/validateEmail.js";

const Login = () => {
	const [user, setUser] = useState({ username: "", password: "" });
	const navigate = useNavigate();

	const onUsernameChange = (event) => {
		const {
			target: { value },
		} = event;
		setUser({ ...user, username: value });
	};

	const onPasswordChange = (event) => {
		const {
			target: { value },
		} = event;
		setUser({ ...user, password: value });
	};

	const submitLogin = (event) => {
		event.preventDefault();
		if (validateEmail(user.username) && user.password.length >= 8) {
			localStorage.setItem("user", user.username);
			navigate("/dashboard");
		}
	};

	useEffect(() => {
		const user = localStorage.getItem("user");
		if (user) navigate("/dashboard");
	}, [navigate]);

	return (
		<div className="login-container center">
			<Container>
				<Row>
					<Col xs={4} />
					<Col xs={4} style={{ margin: "5px" }}>
						<img alt="" src={GithubLogo} className="avatar" />
					</Col>
					<Col xs={4} />
				</Row>
				<Form noValidate onSubmit={submitLogin}>
					<Row>
						<InputGroup className="mb-3" hasValidation>
							<Form.Control
								placeholder="E-mail"
								aria-label="E-mail"
								aria-describedby="basic-addon1"
								onChange={onUsernameChange}
								isInvalid={
									user.username.length > 2 && !validateEmail(user.username)
								}
								isValid={validateEmail(user.username)}
							/>
							<Form.Control.Feedback type="valid" />
						</InputGroup>
					</Row>
					<Row>
						<InputGroup className="mb-3" hasValidation>
							<Form.Control
								placeholder="Password"
								aria-label="Password"
								aria-describedby="basic-addon1"
								onChange={onPasswordChange}
								type="password"
								isInvalid={user.password.length > 2 && user.password.length < 8}
								isValid={user.password.length >= 8}
							/>
							<Form.Control.Feedback type="valid" />
							<Form.Control.Feedback type="invalid" />
						</InputGroup>
					</Row>
					<Row>
						<Button className="button" type="submit">
							{UI_STRINGS.LOGIN}
						</Button>
					</Row>
				</Form>
			</Container>
		</div>
	);
};

export default memo(Login);
