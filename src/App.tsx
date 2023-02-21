import { createContext, useContext, useState } from 'react';
import './App.css';
import Chat from './components/chat';
import Monitor from './components/monitor';
import { ChatProvider } from './context/chatContext';

export const MyContext = createContext<MyContextType | undefined>(undefined);

type MyContextType = {
	someValue: string;
	someFunction: () => void;
};

function App() {
	return (
		<ChatProvider>
			<div className='App'>
				<Monitor />
				<Chat />
			</div>
		</ChatProvider>
	);
}

export default App;
