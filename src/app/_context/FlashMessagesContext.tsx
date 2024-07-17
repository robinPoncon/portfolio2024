"use client";

import { FlashMessagesContextType, Message } from "@/app/_types/flashMessageType";
import React, { ReactNode, createContext, useState } from "react";
import FlashMessages from "../_components/FlashMessages/FlashMessages";

const FlashMessagesContext = createContext<FlashMessagesContextType>({
	messages: [],
	addMessage: () => {},
	removeMessage: () => {}
});

export const FlashMessagesProvider = ({ children }: { children: ReactNode }) => {
	const [messages, setMessages] = useState<Message[]>([]);

	const addMessage = (message: Omit<Message, "id">) => {
		const id = Date.now();
		setMessages((prevMessages: Message[]) => [...prevMessages, { ...message, id: id }]);
	};

	const removeMessage = (id: number) => {
		setMessages((prevMessages) => prevMessages.filter((message) => message.id !== id));
	};

	return (
		<FlashMessagesContext.Provider value={{ messages, addMessage, removeMessage }}>
			<FlashMessages />
			{children}
		</FlashMessagesContext.Provider>
	);
};

export default FlashMessagesContext;
