import { useContext } from 'react';
import { ChatContext } from '../context/chatContext';

const MONITORBOXSTYLES = {
	position: 'fixed',
	backgroundColor: '#FFF6F4',
	left: '10px',
	bottom: 0,
	width: '500px',
	height: '100vh',
	textAlign: 'left',
	padding: '10px',
	color: '#9C9C9C',
	overflowY: 'auto',
};

export default function Monitor() {
	const context = useContext(ChatContext);

	const ChatItems = context?.chatArray.map((el) => {
		return <div key={el.uuid}>{el.text}</div>;
	});

	return (
		<div style={MONITORBOXSTYLES}>
			<br />
			Monitor
			<br />
			<button onClick={() => context?.addChatElement('account')}>Add Account</button>
			{ChatItems}
		</div>
	);
}
