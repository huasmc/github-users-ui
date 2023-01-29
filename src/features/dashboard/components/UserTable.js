import { memo, useEffect, useState } from "react";
import { Form, InputGroup, Pagination } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import { UI_STRINGS } from "../../../common/UI_STRINGS";
import {
	fetchUsers,
	selectUsers,
	setSelectedUser,
	setUsers,
} from "../../../AppSlice";
import { useNavigate } from "react-router-dom";
import { debounce } from "../../../service/debounce";

function UserTable() {
	const [searchQuery, setSearchQuery] = useState(null);
	const [activePage, setActivePage] = useState(1);
	const [perPage, setPerPage] = useState(25);
	const users = useSelector(selectUsers);
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const handleSearchChange = debounce((event) => {
		setSearchQuery(event.target.value);
	});

	useEffect(() => {
		if (!searchQuery)
			dispatch(fetchUsers({ since: activePage, per_page: perPage }));
	}, [activePage, perPage, searchQuery, dispatch]);

	useEffect(() => {
		if (searchQuery) {
			fetch(`https://api.github.com/search/users?q=${searchQuery}`)
				.then((response) => response.json())
				.then((data) => {
					if (data.items) dispatch(setUsers(data.items));
				})
				.catch((error) => {
					throw new Error(error);
				});
		}
	}, [searchQuery]);

	const onPageChange = (page) => setActivePage(page);

	const onPerPageChange = (event) => {
		const {
			target: { value },
		} = event;
		setPerPage(value);
	};

	const seeUserDetails = (user) => {
		dispatch(setSelectedUser(user));
		navigate("/user-details");
	};

	return (
		<>
			<InputGroup className="mb-3">
				<Form.Control
					placeholder="Search Github User"
					aria-label="Search Github User"
					aria-describedby="basic-addon1"
					onChange={handleSearchChange}
				/>
			</InputGroup>
			<div className="table-container">
				<Table striped bordered hover responsive size="sm">
					<thead>
						<tr>
							<th>{UI_STRINGS.USERS_TABLE.AVATAR}</th>
							<th>{UI_STRINGS.USERS_TABLE.USERNAME}</th>
						</tr>
					</thead>
					<tbody>
						{Array.isArray(users) &&
							users.map((user) => {
								return (
									<tr key={user.login} onClick={() => seeUserDetails(user)}>
										<td>
											<img src={user.avatar_url} className="avatar" alt="" />
										</td>
										<td>
											<span>{user.login}</span>
										</td>
									</tr>
								);
							})}
					</tbody>
				</Table>
			</div>

			<Pagination size="sm" style={{ margin: "15px" }}>
				{Array.from({ length: 5 }, (_, index) => index + 1).map(
					(user, index) => (
						<Pagination.Item
							key={index + 1}
							active={activePage === index + 1}
							onClick={() => onPageChange(index + 1)}
						>
							{index + 1}
						</Pagination.Item>
					)
				)}
				<Form.Select
					aria-label="Default select example"
					className="pagination-select"
					size="sm"
					style={{ marginLeft: "15px" }}
					onChange={onPerPageChange}
				>
					<option value="25">25</option>
					<option value="50">50</option>
					<option value="100">100</option>
				</Form.Select>
			</Pagination>
		</>
	);
}

export default memo(UserTable);
