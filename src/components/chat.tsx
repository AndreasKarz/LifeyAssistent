import Header from './chatbox/header';
import './chatbox/chatbox.css';
import Element from './chatbox/element';
import { useContext } from 'react';
import { ChatContext } from '../context/chatContext';

export default function Chat() {
	const context = useContext(ChatContext);
	const chatItems = context?.chatArray.map((chatElement, idx) => {
		const last = context?.chatArray.length == idx + 1;
		return (
			<div key={chatElement.uuid}>
				<Element
					element={chatElement}
					key={chatElement.uuid + 'q'}
					type='sl'
					text={chatElement.text}
					last={last}
				/>
				{chatElement.answer != null && (
					<Element
						element={chatElement}
						key={chatElement.uuid + 'a'}
						type='you'
						text={chatElement.answer.text}
						last={last}
					/>
				)}
			</div>
		);
	});

	return (
		<div className='chatBox z-depth-3'>
			<Header />
			<div
				style={{ flexGrow: 1, overflowY: 'auto' }}
				className='chatArea'
			>
				{chatItems}
			</div>
		</div>
	);
}

/**
 * 				<Element
					type='you'
					msg='Ich bin erreichbar:'
					values={['Vormittag', 'Nachmittag', 'Abend']}
				/>
				<Element
					type='you'
					msg='Meine Mitteilung an meinen Berater:'
					textbox={true}
				/>
 */
