import { useEffect } from "react";
import axios from "axios";
import "./ModalDelete.scss";
import Modal from "../Modal/Modal";
import ButtonModal from "../ButtonModal/ButtonModal";

/**
 * @param {String} deleteName The item name to be deleted e.g. name of the warehouse or name of the inventory item
 * @param {String} deleteType The type of item to be deleted either "warehouse" or "inventory"
 * @param {String} id The id of item to be deleted
 * @param {setState}} setDisplayDeleteModal A setState function to render or unmount the modal
 * @param {Function} refreshTableFunc A fucntion to refresh the table after deletion
 * @returns
 */

function ModalDelete({
	deleteName,
	deleteType,
	id,
	setDisplayDeleteModal,
	refreshTableFunc,
}) {
	const allConfigData = {
		warehouse: {
			apiPath: `/api/warehouses/${id}`,
			descriptionDiff: "list of warehouses",
		},
		inventory: {
			apiPath: `/api/inventories/${id}`,
			descriptionDiff: "inventory list",
		},
	};

	const config = allConfigData[deleteType];

	useEffect(() => {
        // hide page overflow when modal on
		document.body.style.overflow = "hidden";
        // show page scroll again on modal unmount
		return () => (document.body.style.overflow = "scroll");
	}, []);

	const closeModal = () => {
        // unmount model from the page
		setDisplayDeleteModal([]);
	};

	const handleDeleteClick = () => {
		axios
			.delete(
				`${process.env.REACT_APP_API_DOMAIN}:${process.env.REACT_APP_PORT}${config.apiPath}`
			)
			.then((res) => {
				refreshTableFunc();
				closeModal();
			})
			.catch((e) => console.log(e));
	};

	return (
		<section className="del-modal">
			<Modal 
				title={`Delete ${deleteName} ${deleteType}?`}
				description={`Please confirm that you’d like to delete ${deleteName} from the ${config.descriptionDiff}. You won’t be able to undo this action.`}
				buttons={[
					<ButtonModal buttonText="Cancel" onClickFunc={closeModal} buttonType="secondary" key="1"/>,
					<ButtonModal buttonText="Delete" onClickFunc={handleDeleteClick} buttonType="primary" key="2"/>
				]}
				closeModalFunc={closeModal}
			/>
		</section>
	);
}

export default ModalDelete;
