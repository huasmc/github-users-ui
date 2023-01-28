import { memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	fetchRepositories,
	selectRepositories,
	selectSelectedUser,
} from "../../AppSlice";
import { useNavigate } from "react-router-dom";
import RepositoriesTable from "./components/RepositoriesTable";
import { Row } from "react-bootstrap";
import UserMetadata from "./components/UserMetadata";
import withAuth from "../../auth/WithAuth";

const UserDetails = () => {
	const selectedUser = useSelector(selectSelectedUser);
	const repositories = useSelector(selectRepositories);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	useEffect(() => {
		if (selectedUser) dispatch(fetchRepositories(selectedUser.repos_url));
	}, [dispatch]);

	useEffect(() => {
		if (!selectedUser || !selectedUser.login) navigate("/dashboard");
	}, [navigate, selectedUser]);

	return (
		<div className="routes-container">
			<Row>{selectedUser && <UserMetadata selectedUser={selectedUser} />}</Row>
			<Row>
				{repositories && <RepositoriesTable repositories={repositories} />}
			</Row>
		</div>
	);
};

export default memo(withAuth(UserDetails));
