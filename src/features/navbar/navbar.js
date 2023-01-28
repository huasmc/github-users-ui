import { memo, useEffect, useRef, useState } from "react";
import { Col, Nav, Overlay, Row } from "react-bootstrap";
import githubLogo from "../../assets/github.png";
import { useNavigate } from "react-router-dom";
import { UI_STRINGS } from "../../common/UI_STRINGS";
import LogoutIcon from "../../assets/logout.png";

const tooltipStyles = {
	position: "absolute",
	backgroundColor: "lightgrey",
	padding: "2px 10px",
	color: "black",
	borderRadius: 3,
};

const Navbar = () => {
	const [user, setUser] = useState(localStorage.getItem("user"));
	const [showTooltip, setShowTooltip] = useState(false);
	const navigate = useNavigate();
	const target = useRef(null);

	const navigateTo = (path) => navigate(path);

	const displayTooltip = () => {
		setShowTooltip(true);
		setTimeout(() => setShowTooltip(false), 3000);
	};

	useEffect(() => {
		setUser(localStorage.getItem("user"));
	}, [localStorage.getItem("user")]);

	const logout = () => {
		localStorage.clear();
		setUser("");
		navigate("/");
	};

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
				{user && (
					<Col xs={2} onClick={displayTooltip} ref={target}>
						<span className="link">{user ? user : "Log-out"}</span>
					</Col>
				)}
				<Overlay target={target.current} show={showTooltip} placement="bottom">
					{({ placement, arrowProps, show: _show, popper, ...props }) => (
						<div {...props} style={{ ...tooltipStyles, ...props.style }}>
							<span onClick={logout}>
								<img alt="" className="tooltip-icon" src={LogoutIcon} />
								{UI_STRINGS.LOGOUT}
							</span>
						</div>
					)}
				</Overlay>
			</Nav>
		</Row>
	);
};

export default memo(Navbar);
