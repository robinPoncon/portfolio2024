import { CustomObject, Formatters, Validators } from "@/_types/formType";

export const formatters: Formatters = {
	number: (value: string) => value.replace(/[^0-9]+/, ""),
	date: (value: string) => value.replace(/[^0-9/]+/, ""),
	cardDate: (value: string) => {
		value = value.replace(/[^0-9/]{1,}/, "");
		const onlyNumber = value.replace(/[^0-9]+/, "");
		if (/^([0-9]{3})/g.test(value) && !value.includes("/")) {
			return `${onlyNumber.slice(0, 2)}/${onlyNumber.slice(2, onlyNumber.length)}`;
		} else if (onlyNumber && onlyNumber.length === 2) {
			return onlyNumber;
		} else {
			return value;
		}
	},
	price: (value: string) => {
		value = value.replace(/[^0-9.,]/g, "");
		value = value.replace(/,/g, ".");
		value = value.replace(/\.(?=.*\.)/g, "");
		if (/^\d+\.\d{3,}$/g.test(value)) {
			value = value.slice(0, -1);
		}
		return value;
	}
};

export const validators: Validators = {
	authentication: (value: string) => {
		if (!/[0-9]{6}/.test(value)) {
			return ["Le code d'authentification doit avoir 6 chiffres."];
		} else {
			return null;
		}
	},
	notEmpty: (value: string) => {
		if (value === "") {
			return ["Ce champs est obligatoire."];
		} else {
			return null;
		}
	},
	email: (value: string) => {
		if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(value)) {
			return ["Veuillez renseigner une adresse mail valide."];
		} else {
			return null;
		}
	},
	date: (value: string) => {
		if (!/^(0[1-9]|1\d|2\d|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/.test(value)) {
			return ["Veuillez entrer une date au format : JJ/MM/AAAA."];
		} else {
			return null;
		}
	},
	cardNumber: (value: string) => {
		if (
			!/(^4[0-9]{12}(?:[0-9]{3})?$)|(^(?:5[1-5][0-9]{2}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}$)|(3[47][0-9]{13})|(^3(?:0[0-5]|[68][0-9])[0-9]{11}$)|(^6(?:011|5[0-9]{2})[0-9]{12}$)|(^(?:2131|1800|35\d{3})\d{11}$)/.test(
				value
			)
		) {
			return ["Veuillez entrez un numéro de carte valide."];
		} else {
			return null;
		}
	},
	cardDate: (value: string) => {
		if (!/^(0[1-9]|1[0-2])\/(\d{2})$/.test(value)) {
			return ["Veuillez entrer une date valide."];
		} else {
			return null;
		}
	},
	cardSecurityCode: (value: string) => {
		if (!/^[0-9]{3}$/.test(value)) {
			return ["Le code de sécurité doit avoir 3 chiffres."];
		} else {
			return null;
		}
	},
	iban: (value: string) => {
		if (!/^[a-zA-Z]{2}\d{2}\s*(\w{4}\s*){2,7}\w{1,4}\s*$/.test(value)) {
			return ["Veuillez renseigner un iban valide."];
		}
		return null;
	},
	password: (value: string) => {
		let errors: string[] = [];
		if (!/[A-Z]/.test(value)) {
			errors = [...errors, "Votre mot de passe doit contenir au moins une lettre majuscule."];
		}
		if (!/[a-z]/.test(value)) {
			errors = [...errors, "Votre mot de passe doit contenir au moins une lettre minuscule."];
		}
		if (!/[0-9]/.test(value)) {
			errors = [...errors, "Votre mot de passe doit contenir au moins un chiffre."];
		}
		if (value.length < 6) {
			errors = [...errors, "Votre mot de passe doit contenir au moins 6 caractères."];
		}
		return errors.length > 0 ? errors : null;
	},
	phoneNumber: (value: string) => {
		if (
			!/^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/.test(value.replace(/\s/g, "")) &&
			!/\+(9[976]\d|8[987530]\d|6[987]\d|5[90]\d|42\d|3[875]\d|2[98654321]\d|9[8543210]|8[6421]|6[6543210]|5[87654321]|4[987654310]|3[9643210]|2[70]|7|1)\d{1,14}$/.test(
				value.replace(/\s/g, "")
			)
		) {
			return ["Veuillez entrer un numéro de téléphone valide."];
		} else {
			return null;
		}
	}
};

export const validatorFunction = (
	valueInput: string,
	previousErrors: string[] | null,
	validator?: string
) => {
	let isValidated = false;
	let errors = previousErrors;
	if (validator) {
		const newValidatorsLength = validators[validator](valueInput)?.length || 0;
		if (!validators[validator](valueInput)) {
			errors = null;
			if (valueInput) {
				isValidated = true;
			}
		} else if (newValidatorsLength < (errors?.length || 0)) {
			errors = validators[validator](valueInput);
		}
	} else {
		isValidated = true;
	}

	return { errors, isValidated };
};

export const formDataToObject = (formData: FormData) => {
	const object: CustomObject = {};
	formData.forEach((value, key) => {
		object[key] = value;
	});
	return object;
};
