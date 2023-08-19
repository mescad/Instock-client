import closeIcon from "../../asset/Icons/close-24px.svg";
import { useEffect } from "react";
import "./Modal.scss";

function Modal({title, description, buttons, closeModalFunc}){

    return(
        <div className="modal__wrapper">
				<button className="modal__close-btn" onClick={closeModalFunc}>
					<img
						src={closeIcon}
						alt="Close confirm delete modal"
						className="modal__close-icon"
					/>
				</button>
				<h1 className="modal__title">
					{title}
				</h1>
				<p className="modal__description">
					{description}
				</p>
				<div className="modal__btn-wrapper">
                    {
                        buttons.map((button)=>button)
                    }
				</div>
		</div>
    )
}
export default Modal;