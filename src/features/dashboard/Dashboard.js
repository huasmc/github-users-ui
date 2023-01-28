import { memo } from "react";
import { Row } from "react-bootstrap";
import UserTable from "./components/UserTable";

const Dashboard = () => {
	return (
		<>
			<Row>
				<UserTable />
			</Row>
		</>
	);
};

export default memo(Dashboard);
