import { memo } from "react";
import withAuth from "../../auth/WithAuth";
import UserTable from "./components/UserTable";

const Dashboard = () => {
	return (
		<div className="routes-container">
			<UserTable />
		</div>
	);
};

export default memo(withAuth(Dashboard));
