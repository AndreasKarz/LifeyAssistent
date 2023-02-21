import Header from './chatbox/header';
import './chatbox/chatbox.css';
import Element from './chatbox/element';
import { useContext } from 'react';
import { ChatContext } from '../context/chatContext';

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
	const chatItems = context?.chatArray.map((chatElement) => {
		return (
			<div key={chatElement.uuid}>
				<Element
					key={chatElement.uuid + 'q'}
					type='sl'
					msg={chatElement?.text}
				/>
				<Element
					key={chatElement.uuid + 'a'}
					type='you'
					msg={chatElement?.answer?.text}
					options={chatElement?.answer?.options}
					uuid={chatElement.uuid}
				/>
			</div>
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
