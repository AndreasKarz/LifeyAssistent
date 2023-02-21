import React, { useState } from 'react';
import data from '../data.json';

export const ChatContext = React.createContext<null | ChatContextType>(null);

export type ChatElementType = {
	uuid: string;
	id: string;
	timestamp: Date;
	text: string;
	used: boolean;
	answer?: {
		text: string;
		options: string[];
	};
};

type ChatContextType = {
	chatArray: ChatElementType[];
	addChatElement: (id: string) => void;
};

type ContextProviderProps = {
	children: React.ReactNode;
};

function getElement(id: string): ChatElementType {
	var sElement = data.elements.find((item) => item.id === id);
	return {
		uuid: crypto.randomUUID(),
		id: sElement?.id,
		timestamp: new Date(),
		text: sElement?.title,
		used: false,
		answer: sElement?.answer,
	};
}

export function ChatProvider({ children }: ContextProviderProps) {
	const [chatArray, setChatArray] = useState([getElement('entry')]);

	function addChatElement(id: string) {
		const el = getElement(id);
		setChatArray((oldArray) => [...oldArray, el]);
	}

	return (
		<ChatContext.Provider
			value={{
				chatArray: chatArray,
				addChatElement: (id) => addChatElement(id),
			}}
		>
			{children}
		</ChatContext.Provider>
	);
}
