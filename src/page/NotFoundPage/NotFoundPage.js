import ModalNotification from "../../components/ModalNotification/ModalNotification";
import { useNavigate } from "react-router";

function NotFoundPage({ setNotificationModal }) {
	const navigate = useNavigate();
	setNotificationModal([
		<ModalNotification
			modalTitle="Page Not Found"
			modalDescription="Click OK back to home page..."
			setNotificationModal={setNotificationModal}
			onCloseFunc={() => navigate("/")}
		/>,
	]);
	return <></>;
}

export default NotFoundPage;
