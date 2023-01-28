import { memo } from "react";
import { Row } from "react-bootstrap";
import UserTable from "./components/UserTable";

const Dashboard = () => {
	return (
		<>
			<Row>
				<div style={{ padding: "80px" }}>
					<UserTable />
				</div>
			</Row>
		</>
	);
};

export default memo(Dashboard);
