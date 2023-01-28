import { memo } from "react";
import { Table } from "react-bootstrap";
import { UI_STRINGS } from "../../../common/UI_STRINGS";

const RepositoriesTable = ({ repositories }) => {
	return (
		<div className="table-container">
			<h4>
				<b>Repositories</b>
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
								<tr key={repository.name}>
									<td>
										<span>{repository.name}</span>
									</td>
									<td>
										<span>{repository.size}</span>
									</td>{" "}
									<td>
										<span>{repository.watchers}</span>
									</td>
								</tr>
							);
						})}
				</tbody>
			</Table>
		</div>
	);
};

export default memo(RepositoriesTable);
