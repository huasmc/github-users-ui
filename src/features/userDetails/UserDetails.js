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

const UserDetails = () => {
	const selectedUser = useSelector(selectSelectedUser);
	const repositories = useSelector(selectRepositories);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	useEffect(() => {
		dispatch(fetchRepositories(selectedUser.repos_url));
	}, []);

	useEffect(() => {
		if (!selectedUser.login) navigate("/dashboard");
	}, []);

	return (
		<div style={{ padding: "80px" }}>
			<Row>
				<UserMetadata selectedUser={selectedUser} />
			</Row>
			<Row>
				<RepositoriesTable repositories={repositories} />
			</Row>
		</div>
	);
};

export default memo(UserDetails);
