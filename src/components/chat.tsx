import Header from './chatbox/header';
import './chatbox/chatbox.css';
import Element from './chatbox/element';
import data from '../data.json';
import { useContext, useState } from 'react';
import { ChatContext, ChatElementType } from '../context/chatContext';

const CHATBOXSTYLES = {
	position: 'fixed',
	border: '1px solid silver',
	right: '50px',
	bottom: 0,
	width: '450px',
	height: '85vh',
	backgroundColor: 'rgba(210, 210, 210, 0.3)',
	display: 'flex',
	flexDirection: 'column',
};

export default function Chat() {
	const context = useContext(ChatContext);

	const [chat, setChat] = useState(['entry']);

	const addElement = (id: string) => {
		setChat((current) => [...current, id]);
	};

	const chatItems = context?.chatArray.map((chatElement) => {
		//var chatElement = data.elements.find((item) => item.id === el);

		return (
			<>
				<Element
					type='sl'
					msg={chatElement?.text}
				/>
				<Element
					type='you'
					msg={chatElement?.answer?.text}
					options={chatElement?.answer?.options}
					handler={context.addChatElement}
				/>
			</>
		);
	});

	return (
		<div
			style={CHATBOXSTYLES}
			className='z-depth-3'
		>
			<Header />
			<div
				style={{ flexGrow: 1, overflowY: 'auto' }}
				className='chatArea'
			>
				{chatItems}
				<Element
					type='you'
					msg='Ich bin erreichbar:'
					values={['Vormittag', 'Nachmittag', 'Abend']}
				/>
				<Element
					type='you'
					msg='Meine Mitteilung an meinen Berater:'
					textbox={true}
				/>
			</div>
		</div>
	);
}
