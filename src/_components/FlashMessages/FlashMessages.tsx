"use client";
import { useContext, useEffect } from "react";
import "./FlashMessages.scss";
import Image from "next/image";
import { FlashMessagesContextType, MessageType } from "@/_types/flashMessageType";
import FlashMessagesContext from "@/_context/FlashMessagesContext";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const FlashMessages = () => {
	const { messages, removeMessage } = useContext<FlashMessagesContextType>(FlashMessagesContext);

	useEffect(() => {
		let messageLength = messages[0]?.text.length || 0;

		const timer = setInterval(() => {
			if (messages.length > 0) {
				removeMessage(messages[0].id);
			}
		}, 3000 + messageLength * 50);

		return () => {
			clearInterval(timer);
		};
	}, [messages, removeMessage]);

	const removeFlashMessage = (id: number) => {
		removeMessage(id);
	};

	const getIconSource = (type: MessageType) => {
		if (type === "success") return "/icons/icon_success.svg";
		if (type === "warning") return "icon_warning.svg";
		if (type === "error") return "/icons/icon_error.svg";
		return "icon_info.svg";
	};

	return (
		<div className="flashMessages w-full px-4">
			<TransitionGroup>
				{messages.map((message) => (
					<CSSTransition
						key={message.id}
						timeout={750}
						classNames="flashMessageTransition"
					>
						<div className={`flashMessage w-full ${message.type}`}>
							<Image
								className="mb-auto"
								src={getIconSource(message.type)}
								width={24}
								height={24}
								alt="icône du statut d'un message flash"
							/>
							<div className="flashMessageContent">
								<div className="flashMessageTextWrapper">
									<p className="flashMessageTitle">{message.title}</p>
									<p className="flashMessageText">{message.text}</p>
								</div>
								{message.buttonText && message.buttonAction ? (
									<button
										type="button"
										onClick={() => {
											message?.buttonAction?.();
										}}
										className="flashMessageBtnAction"
									>
										{message.buttonText}
									</button>
								) : null}
							</div>
							<button
								type="button"
								className={`btnClose ${message.type}`}
								onClick={() => removeFlashMessage(message.id)}
							>
								<Image
									src="/icons/icon_close.svg"
									width={24}
									height={24}
									alt="icône d'une croix pour la suppression"
								/>
							</button>
						</div>
					</CSSTransition>
				))}
			</TransitionGroup>
		</div>
	);
};

export default FlashMessages;
