import { memo, useEffect, useState } from "react";
import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { UI_STRINGS } from "../../common/UI_STRINGS.js";
import GithubLogo from "../../assets/github.png";

const Login = () => {
	const [user, setUser] = useState({ username: "", password: "" });
	const [validation, setValidation] = useState(false);
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

	const submitLogin = () => {
		if (user.username.length >= 4 && user.password.length >= 8) {
			localStorage.setItem("user", user.username);
			navigate("/dashboard");
		} else setValidation(true);
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
				<Row>
					<InputGroup className="mb-3">
						<Form.Control
							placeholder="E-mail"
							aria-label="E-mail"
							aria-describedby="basic-addon1"
							onChange={onUsernameChange}
						/>
					</InputGroup>
				</Row>
				<Row>
					<InputGroup className="mb-3">
						<Form.Control
							placeholder="Password"
							aria-label="Password"
							aria-describedby="basic-addon1"
							onChange={onPasswordChange}
						/>
					</InputGroup>
				</Row>
				<Row>
					<Button className="button" onClick={submitLogin}>
						{UI_STRINGS.LOGIN}
					</Button>
				</Row>
				{validation && (
					<span style={{ color: "red" }}>{UI_STRINGS.VALIDATION}</span>
				)}
			</Container>
		</div>
	);
};

export default memo(Login);
