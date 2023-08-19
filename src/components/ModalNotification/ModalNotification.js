import { useEffect } from "react";
import "./ModalNotification.scss";
import Modal from "../Modal/Modal";
import ButtonModal from "../ButtonModal/ButtonModal";

/**
 * @param {String} errorTitle The title of the error modal
 * @param {String} errorDescription The description of the error modal
 * @param {setState} setNotificationModal The setState for unmounting modal
 * @param {Function} onCloseFunc An optional fucntion to execute when closing the modal
 * @returns
 */

function ModalNotification({
	modalTitle,
    modalDescription,
    setNotificationModal,
    onCloseFunc
}) {

	const closeModal = () => {
        // unmount model from the page
		setNotificationModal([]);
        if(onCloseFunc){
            onCloseFunc();
        }
	};

	return (
		<section className="error-modal">
			<Modal 
				title={modalTitle}
				description={modalDescription}
				buttons={[
					<ButtonModal buttonText="OK" onClickFunc={closeModal} buttonType="primary" key="1"/>
				]}
				closeModalFunc={closeModal}
			/>
		</section>
	);
}

export default ModalNotification;
