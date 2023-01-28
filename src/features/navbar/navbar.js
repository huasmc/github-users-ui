import { memo, useEffect, useState } from "react";
import { Col, Nav, Row } from "react-bootstrap";

const Navbar = () => {
	const [user, setUser] = useState("");

	useEffect(() => {
		const user = localStorage.getItem("token");
		setUser(user);
	}, []);
	return (
		<Row style={{ borderBottom: "2px solid black", paddingBottom: "10px" }}>
			<Col xs={1}>
				<span className="link">Logo</span>
			</Col>
			<Col xs={1}>
				<span className="link">Inicio</span>
			</Col>
			<Col xs={8} />
			<Col xs={2}>
				<span className="link">{user ? user.username : "Log-out"}</span>
			</Col>
		</Row>
	);
};

export default memo(Navbar);
