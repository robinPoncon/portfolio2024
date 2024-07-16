import React, { ChangeEvent, FocusEvent, useEffect, useState } from "react";
import "./CustomInput.scss";
import { formatters, validatorFunction, validators } from "../../../_utils/form";

type CustomInputProps = {
	label: string;
	name: string;
	defaultValue: string;
	returnedValue: (name: string, value: string, isValidated: boolean) => void;
	placeholder?: string;
	type?: string;
	maxLength?: number;
	required?: boolean;
	formatter?: "number" | "date" | "cardDate" | "price";
	validator?:
		| "authentication"
		| "notEmpty"
		| "email"
		| "date"
		| "cardNumber"
		| "cardDate"
		| "cardSecurityCode"
		| "password"
		| "iban"
		| "phoneNumber";
	icon?: string;
};

const CustomInput = ({
	label,
	name,
	defaultValue,
	returnedValue,
	placeholder,
	type = "text",
	maxLength,
	required,
	formatter,
	validator,
	icon
}: CustomInputProps): JSX.Element => {
	const [valueInput, setValueInput] = useState<string>(defaultValue || "");
	const [errors, setErrors] = useState<string[] | null>(null);
	const [isValidatedInput, setIsValidatedInput] = useState<boolean>(required ? false : true);

	useEffect(() => {
		const validatorResult = validatorFunction(valueInput, errors, validator);
		setErrors(validatorResult.errors);
		setIsValidatedInput(validatorResult.isValidated);
		// returnedValue(name, valueInput, validatorResult.isValidated);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [valueInput]);

	useEffect(() => {
		setValueInput(defaultValue);
	}, [defaultValue]);

	const onChange = (e: ChangeEvent<HTMLInputElement>) => {
		let value = e?.currentTarget?.value;

		if (formatter && formatters.hasOwnProperty(formatter)) {
			value = formatters[formatter](value);
		}

		setValueInput(value);
	};

	const onBlur = (e: FocusEvent<HTMLInputElement>) => {
		if (required && !e?.currentTarget?.value) {
			setErrors(["Ce champs est obligatoire."]);
		} else if (validator && validators[validator](e.currentTarget.value)) {
			setErrors(validators[validator](e.currentTarget.value));
		}
		returnedValue(name, e.currentTarget.value, isValidatedInput);
	};

	return (
		<div className="componentCustomInput">
			<label
				className={required ? "required" : ""}
				htmlFor={name}
			>
				{label}
			</label>
			<div className={`blocInput ${icon === "bankCard" ? "iconsCardInput" : ""}`}>
				<input
					className={errors ? "error" : isValidatedInput && valueInput ? "validated" : ""}
					id={name}
					name={name}
					placeholder={placeholder}
					type={type}
					maxLength={maxLength}
					value={valueInput}
					onChange={onChange}
					onBlur={onBlur}
				/>
			</div>
			{errors && errors.map((errorMsg, index) => <p key={index}>{errorMsg}</p>)}
		</div>
	);
};

export default CustomInput;
