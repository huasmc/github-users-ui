import { memo, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserData, selectUserMetadata } from "../../../AppSlice";
import { UI_STRINGS } from "../../../common/UI_STRINGS";

const UserMetadata = ({ selectedUser }) => {
	const metadata = useSelector(selectUserMetadata);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchUserData(selectedUser.url));
	}, [selectedUser, dispatch]);

	return (
		<Container style={{ margin: "20px 0 20px 0" }}>
			{metadata && (
				<Row>
					<Col xs={1}>
						<img alt="" className="avatar-lg" src={metadata.avatar_url} />
					</Col>
					<Col xs={2}>
						<hr></hr>
						<Row>
							<span>
								<b>{metadata.name}</b>
							</span>
						</Row>
						<Row>
							<span>{metadata.bio}</span>
						</Row>
						<Row>
							<a href={metadata.blog}>{metadata.blog}</a>
						</Row>
					</Col>
					<Col xs={2}>
						<hr></hr>
						<Col>
							<b>{UI_STRINGS.USER_DETAILS.FOLLOWERS}</b>
							{metadata.followers}
						</Col>
						<Col>
							<b>{UI_STRINGS.USER_DETAILS.FOLLOWING}</b> {metadata.following}
						</Col>
						<Col>
							<b>{UI_STRINGS.USER_DETAILS.GISTS} </b>
							{metadata.public_gists}
						</Col>
					</Col>
				</Row>
			)}
		</Container>
	);
};

export default memo(UserMetadata);
