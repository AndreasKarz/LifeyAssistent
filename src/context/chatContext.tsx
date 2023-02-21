import React, { useState } from 'react';
import data from '../data.json';

export const ChatContext = React.createContext<null | ChatContextType>(null);

export type ChatElementType = {
	uuid: string; // eindeutige ID im Chat Verlauf und als Key
	id: string; // id des Element Typs
	timestamp: Date; // Zeitstempel im Chatverlauf
	text: string; // Angezeigter Text im ChatElement
	used: boolean; // Default auf false, sobald angeklickt geht es auf true und das Element hat keinen pointer-event mehr (chatbox.css)
	answer?: {
		// Antwort Element
		text: string; // Angezeigter Text
		options: string[]; // Optionsmöglichkeiten =>
		values?: string[]; // Muss noch weiter ausgebaut werden als Objekt option/checkbox etc.
		msg?: string; // Hier wird die Nachricht gespeichert, falls eine Textbox aktiviert wurde
		textbox?: boolean; // Flag, um textbox ein-/auszublenden
	};
};

type ChatContextType = {
	chatArray: ChatElementType[];
	addChatElement: (id: string) => void;
	setElementUsed: (uuid: string) => void;
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

	function setElementUsed(uuid: string) {
		chatArray.map((item) => {
			if (item.uuid === uuid) {
				return { ...item, used: true };
			}
		});
	}

	return (
		<ChatContext.Provider
			value={{
				chatArray: chatArray,
				addChatElement: (id) => addChatElement(id),
				setElementUsed: (uuid) => setElementUsed(uuid),
			}}
		>
			{children}
		</ChatContext.Provider>
	);
}
