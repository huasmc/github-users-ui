import { memo } from "react";
import UserTable from "./components/UserTable";

const Dashboard = () => {
	return (
		<div className="routes-container">
			<UserTable />
		</div>
	);
};

export default memo(Dashboard);
