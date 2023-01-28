import { memo, useState } from "react";
import { Table } from "react-bootstrap";
import { UI_STRINGS } from "../../../common/UI_STRINGS";
import RepositoryDetails from "./RepositoryDetails";

const RepositoriesTable = ({ repositories }) => {
	const [selectedRepository, setSelectedRepository] = useState(null);
	const [modalOpen, setModalOpen] = useState(false);

	const selectRepository = (repository) => {
		setSelectedRepository(repository);
		setModalOpen(true);
	};

	const hideModal = () => setModalOpen(false);

	return (
		<div className="table-container">
			<h4>
				<b>{UI_STRINGS.REPOSITORIES.REPOSITORIES}</b>
			</h4>
			<Table striped bordered hover responsive size="sm">
				<thead>
					<tr>
						<th>{UI_STRINGS.REPOSITORIES.NAME}</th>
						<th>{UI_STRINGS.REPOSITORIES.SIZE}</th>
						<th>{UI_STRINGS.REPOSITORIES.WATCHERS}</th>
					</tr>
				</thead>
				<tbody>
					{Array.isArray(repositories) &&
						repositories.map((repository) => {
							return (
								<tr
									key={repository.name}
									onClick={() => selectRepository(repository)}
								>
									<td>
										<span>{repository.name}</span>
									</td>
									<td>
										<span>{repository.size}</span>
									</td>
									<td>
										<span>{repository.watchers}</span>
									</td>
								</tr>
							);
						})}
				</tbody>
			</Table>
			{selectedRepository && (
				<RepositoryDetails
					show={modalOpen}
					onHide={hideModal}
					repository={selectedRepository}
				/>
			)}
		</div>
	);
};

export default memo(RepositoriesTable);
