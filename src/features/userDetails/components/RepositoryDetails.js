import { memo } from "react";
import { Button, Col, Container, Modal, Row } from "react-bootstrap";
import { UI_STRINGS } from "../../../common/UI_STRINGS";

const RepositoryDetails = ({ show, onHide, repository }) => {
	console.log(repository);
	return (
		<Modal
			show={show}
			onHide={onHide}
			aria-labelledby="contained-modal-title-vcenter"
			centered
		>
			<Modal.Header closeButton>
				<Modal.Title id="contained-modal-title-vcenter">
					Using Grid in Modal
				</Modal.Title>
			</Modal.Header>
			<Modal.Body className="show-grid">
				<Container>
					<Row>
						<Col xs={6} md={6}>
							<b>{UI_STRINGS.REPOSITORY_DETAILS.NAME}: </b>
							<span>{repository.name}</span>
						</Col>
					</Row>
					<Row>
						<Col xs={6} md={6}>
							<b>{UI_STRINGS.REPOSITORY_DETAILS.LANGUAGE}: </b>
							<span>{repository.language}</span>
						</Col>
					</Row>
					<Row>
						<Col xs={12} md={12}>
							<b>{UI_STRINGS.REPOSITORY_DETAILS.DESCRIPTION}: </b>
							<span>{repository.description}</span>
						</Col>
					</Row>
					<Row>
						<Col xs={12}>
							<a href={repository.html_url} target="_blank">
								{UI_STRINGS.REPOSITORY_DETAILS.ON_GITHUB}
							</a>
						</Col>
					</Row>
				</Container>
			</Modal.Body>
			<Modal.Footer>
				<Button onClick={onHide}>Close</Button>
			</Modal.Footer>
		</Modal>
	);
};

export default memo(RepositoryDetails);
