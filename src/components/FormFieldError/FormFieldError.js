import "./FormFieldError.scss";
import errorIcon from "../../asset/Icons/error-24px.svg";

function FormFieldError({ fieldName, formValidation, touch }) {
	return (
		touch &&
		!formValidation[fieldName].valid && (
			<div className="form-field-error__wrapper">
				<img src={errorIcon} alt="Error"  className="form-field-error__icon"/>
				<p className="form-field-error__text">
					{formValidation[fieldName].error}
				</p>
			</div>
		)
	);
}

export default FormFieldError;
