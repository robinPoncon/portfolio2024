import { validatorFunction } from "../../../_utils/form";
import { FormEvent, useEffect, useState } from "react";

type FormValues = {
	name: string;
	value: string;
	isValidated?: boolean;
	validator?: "authentication" | "notEmpty" | "email" | "date" | "cardNumber" | "cardDate" | "cardSecurityCode" | "password" | "iban" | "phoneNumber";
	inputRef?: string;
}[];

const useCustomForm = (initialDatas: FormValues, onSubmit: (submitDatas: FormData) => void) => {
	const [formDatas, setFormDatas] = useState<FormValues>(initialDatas);
	const [isSubmitBtnDisabled, setIsSubmitBtnDisabled] = useState<boolean>(true);

	useEffect(() => {
		if (initialDatas) {
			let newFormDatas: FormValues = [];
			let nameInputRefNotShow: string | undefined = undefined;
			const indexInputRef = initialDatas.findIndex((data) => data.inputRef);
			if (indexInputRef !== -1 && initialDatas[indexInputRef].value === "false") {
				nameInputRefNotShow = initialDatas[indexInputRef].inputRef;
			}
			for (const data of initialDatas) {
				const newObject = data;
				if (data.validator && nameInputRefNotShow !== data.name) {
					const getStatusInput = validatorFunction(data.value, null, data.validator);
					newObject.isValidated = getStatusInput.isValidated;
				} else {
					newObject.isValidated = true;
				}
				newFormDatas = [...newFormDatas, newObject];
			}
			setFormDatas(newFormDatas);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const handleChange = (name: string, value: string, isValidated: boolean) => {
		if (formDatas) {
			const newFormDatas = [...formDatas];
			const getIndexOfInputDatas = newFormDatas.findIndex((data) => data.name === name);

			if (getIndexOfInputDatas !== -1) {
				newFormDatas[getIndexOfInputDatas].value = value;
				newFormDatas[getIndexOfInputDatas].isValidated = isValidated;
			}

			if (getIndexOfInputDatas !== -1 && newFormDatas[getIndexOfInputDatas].inputRef) {
				const getIndexInputRef = newFormDatas.findIndex((data) => data.name === newFormDatas[getIndexOfInputDatas].inputRef);
				if (getIndexInputRef !== -1) {
					if (newFormDatas[getIndexOfInputDatas].value === "false") {
						newFormDatas[getIndexInputRef].isValidated = true;
					} else {
						const getStatusInput = validatorFunction(newFormDatas[getIndexInputRef].value, null, newFormDatas[getIndexInputRef].validator);
						newFormDatas[getIndexInputRef].isValidated = getStatusInput.isValidated;
					}
				}
			}

			let areAllInputsValidated = true;
			for (const data of newFormDatas) {
				if (!data.isValidated) {
					areAllInputsValidated = false;
				}
			}

			setFormDatas(newFormDatas);
			setIsSubmitBtnDisabled(!areAllInputsValidated);
		}
	};

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (!isSubmitBtnDisabled && formDatas) {
			let nameCheckboxNotShow: string | undefined = undefined;
			let nameInputRefNotShow: string | undefined = undefined;
			const indexInputRef = formDatas.findIndex((data) => data.inputRef);
			if (indexInputRef !== -1 && formDatas[indexInputRef].value === "false") {
				nameCheckboxNotShow = formDatas[indexInputRef].name;
				nameInputRefNotShow = formDatas[indexInputRef].inputRef;
			}

			let submitDatas: FormData = new FormData();
			for (const data of formDatas) {
				if (data.name !== nameInputRefNotShow && data.name !== nameCheckboxNotShow) {
					submitDatas.append(data.name, data.value);
				}
			}
			onSubmit(submitDatas);
		}
	};

	const resetFormDataValues = () => {
		const newFormDatas = [...formDatas];
		for (const data of newFormDatas) {
			data.value = "";
		}
		setFormDatas(newFormDatas);
	};

	return {
		formDatas,
		isSubmitBtnDisabled,
		setIsSubmitBtnDisabled,
		handleChange,
		handleSubmit,
		resetFormDataValues
	};
};

export default useCustomForm;
