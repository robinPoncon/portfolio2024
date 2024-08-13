"use client";

import CustomInput from "../../_components/Form/CustomInput/CustomInput";
import CustomTextarea from "../../_components/Form/CustomTextarea/CustomTextarea";
import useCustomForm from "../../_components/Form/UseCustomForm/UseCustomForm";
import { useContext, useEffect } from "react";
import FlashMessagesContext from "@/app/_context/FlashMessagesContext";
import { useLoader } from "@/app/_context/LoaderContext";
import { formDataToObject } from "@/app/_utils/form";
import { useTranslations } from "next-intl";

const ContactPage = () => {
	const flashMessage = useContext(FlashMessagesContext);
	const { isLoading, showLoader, hideLoader } = useLoader();
	const t = useTranslations("ContactPage");

	useEffect(() => {
		if (typeof window !== "undefined") {
			window.scrollTo(0, 0);
		}
	}, []);

	const getSubmit = async (submitDatas: FormData) => {
		setIsSubmitBtnDisabled(true);
		showLoader();
		const submitDatasConverted = formDataToObject(submitDatas);

		try {
			const response = await fetch("/api/contactEmail", {
				method: "POST",
				body: JSON.stringify(submitDatasConverted)
			});

			if (response.ok) {
				hideLoader();
				flashMessage.addMessage({
					type: "success",
					title: "Succès",
					text: "Merci ! Votre message a bien été envoyé, je vous ferai un retour rapidement."
				});
				resetFormDataValues();
			} else {
				hideLoader();
				setIsSubmitBtnDisabled(false);
				flashMessage.addMessage({
					type: "error",
					title: "Erreur",
					text: "Une erreur est survenue durant l'envoi de votre message, n'hésitez pas à me contacter directement par email. Vous trouverez mon email en bas de la page."
				});
			}
		} catch (error) {
			hideLoader();
			setIsSubmitBtnDisabled(false);
			flashMessage.addMessage({
				type: "error",
				title: "Erreur",
				text: "Une erreur est survenue durant l'envoi de votre message, n'hésitez pas à me contacter directement par email. Vous trouverez mon email en bas de la page."
			});
		}
	};

	const {
		formDatas,
		isSubmitBtnDisabled,
		setIsSubmitBtnDisabled,
		handleChange,
		handleSubmit,
		resetFormDataValues
	} = useCustomForm(
		[
			{
				name: "message",
				value: "",
				validator: "notEmpty"
			},
			{
				name: "firstName",
				value: "",
				validator: "notEmpty"
			},
			{
				name: "lastName",
				value: "",
				validator: "notEmpty"
			},
			{
				name: "email",
				value: "",
				validator: "email"
			}
		],
		getSubmit
	);

	return (
		<div className={`flex flex-col gap-16 py-20 px-4 lg:px-24 ${isLoading ? "blur-md" : ""}`}>
			<h1 className="titleFont font-semibold text-2xl text-center mx-auto w-fit customBorderBlue p-4 md:text-4xl">
				Formulaire de contact
			</h1>
			<div className="flex flex-col gap-16 justify-between lg:flex-row">
				<form
					className="gap-5 flex flex-col lg:w-2/3"
					onSubmit={handleSubmit}
				>
					<CustomTextarea
						label={t("your-message")}
						name="message"
						placeholder={t("your-message-placeholder")}
						required
						validator={formDatas[0].validator}
						defaultValue={formDatas[0].value}
						returnedValue={handleChange}
					/>
					<div className="flex flex-col gap-5 xl:flex-row">
						<CustomInput
							label={t("your-firstname")}
							name="firstName"
							placeholder={t("your-firstname-placeholder")}
							required
							validator={formDatas[1].validator}
							defaultValue={formDatas[1].value}
							returnedValue={handleChange}
						/>
						<CustomInput
							label={t("your-lastname")}
							name="lastName"
							placeholder={t("your-lastname-placeholder")}
							required
							validator={formDatas[2].validator}
							defaultValue={formDatas[2].value}
							returnedValue={handleChange}
						/>
					</div>
					<div className="flex flex-col gap-5 xl:flex-row">
						<CustomInput
							label={t("your-email")}
							name="email"
							placeholder={t("your-email-placeholder")}
							required
							validator={formDatas[3].validator}
							defaultValue={formDatas[3].value}
							returnedValue={handleChange}
						/>
					</div>
					<button
						className={`bg-customViolet rounded-md px-4 py-2 w-fit mx-auto text-white ${isSubmitBtnDisabled ? "disabledBtn" : ""}`}
						type="submit"
					>
						{t("send")}
					</button>
				</form>
			</div>
		</div>
	);
};

export default ContactPage;
