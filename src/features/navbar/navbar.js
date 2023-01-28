import { memo, useEffect, useState } from "react";
import { Col, Nav, Row } from "react-bootstrap";
import githubLogo from "../../assets/github.png";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
	const [user, setUser] = useState("");
	const navigate = useNavigate();

	useEffect(() => {
		const user = localStorage.getItem("token");
		setUser(user);
	}, []);

	const navigateTo = (path) => navigate(path);

	return (
		<Row style={{ borderBottom: "2px solid black", paddingBottom: "10px" }}>
			<Nav>
				<Col xs={1} onClick={() => navigateTo("/dashboard")}>
					<span className="link">
						<img alt="" src={githubLogo} className="avatar" />
					</span>
				</Col>
				<Col xs={1} onClick={() => navigateTo("/dashboard")}>
					<span className="link">Dashboard</span>
				</Col>
				<Col xs={8} />
				<Col xs={2} onClick={() => navigateTo("/")}>
					<span className="link">{user ? user.username : "Log-out"}</span>
				</Col>
			</Nav>
		</Row>
	);
};

export default memo(Navbar);
