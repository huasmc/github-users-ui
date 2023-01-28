import { memo, useEffect, useState } from "react";
import { Col, NavLink, Row } from "react-bootstrap";

const Navbar = () => {
	const [user, setUser] = useState("");

	useEffect(() => {
		const user = localStorage.getItem("token");
		setUser(user);
	}, []);

	return (
		<Row style={{ borderBottom: "2px solid black", paddingBottom: "10px" }}>
			<Col xs={1}>
				<NavLink className="link">Logo</NavLink>
			</Col>
			<Col xs={1}>
				<NavLink className="link">Dashboard</NavLink>
			</Col>
			<Col xs={8} />
			<Col xs={2}>
				<NavLink className="link">{user ? user.username : "Log-out"}</NavLink>
			</Col>
		</Row>
	);
};

export default memo(Navbar);
