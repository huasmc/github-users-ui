import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const withAuth = (Component) => {
	return function AuthenticatedComponent(props) {
		const user = localStorage.getItem("user");
		const location = useLocation();
		const navigate = useNavigate();

		useEffect(() => {
			if (!user) {
				if (location.pathname !== "/") navigate("/");
			}
		}, [location, user, navigate]);

		if (!user) {
			return null;
		}

		return <Component {...props} />;
	};
};
export default withAuth;
