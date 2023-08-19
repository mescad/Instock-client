import ModalNotification from "../../components/ModalNotification/ModalNotification";
import { useNavigate } from "react-router";

function NotFoundPage({ setNotificationModal }) {
	const navigate = useNavigate();

	const onCloseFunc = () => {
		navigate("/");
	};
	return (
		<ModalNotification
			errorTitle="Page Not Found"
			errorDescription="Click OK back to home page..."
			setNotificationModal={setNotificationModal}
			onCloseFunc={onCloseFunc}
		/>
	);
}

export default NotFoundPage;
