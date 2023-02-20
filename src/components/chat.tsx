import Header from './chatbox/header';
import './chatbox/chatbox.css';
import Element from './chatbox/element';
import data from '../data.json';
import { useState } from 'react';

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
	const [chat, setChat] = useState(['entry']);

	const addElement = (id: string) => {
		setChat((current) => [...current, id]);
	};

	const chatItems = chat.map((el) => {
		var chatElement = data.elements.find((item) => item.id === el);

		return (
			<>
				<Element
					type='sl'
					msg={chatElement?.title}
				/>
				<Element
					type='you'
					msg={chatElement?.answer?.text}
					options={chatElement?.answer?.options}
					handler={addElement}
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
