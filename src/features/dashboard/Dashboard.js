import { memo } from "react";
import { Row } from "react-bootstrap";
import Navbar from "../navbar/Navbar";
import UserTable from "./components/UserTable";

const Dashboard = () => {
	return (
		<>
			<Row>
				<Navbar />
			</Row>
			<Row>
				<div style={{ padding: "80px" }}>
					<UserTable />
				</div>
			</Row>
		</>
	);
};

export default memo(Dashboard);
