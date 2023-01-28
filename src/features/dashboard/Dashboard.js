import { memo } from "react";
import UserTable from "./components/UserTable";

const Dashboard = () => {
	return (
		<div style={{ padding: "80px" }}>
			<UserTable />
		</div>
	);
};

export default memo(Dashboard);
