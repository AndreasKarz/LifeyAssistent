import Header from './chatbox/header';
import './chatbox/chatbox.css';
import Element from './chatbox/Element';

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
				<Element
					type='sl'
					msg='Zu welchen Themen kann ich Ihnen behilflich sein?'
				/>
				<Element
					type='you'
					msg='Mich interessiert das Thema:'
					options={['changeAddress', 'simEarlyRetirement', 'orderCertificate']}
				/>
				<Element
					type='sl'
					msg='Leider können wir ihre Frühpensionierung nicht online berechnen. Möchten sie gerne ihren persönlichen Berater kontaktieren?'
				/>
				<Element
					type='you'
					msg='Ich möchte:'
					options={['contactAdvisorPhone', 'contactAdvisorMessage', 'contactAdvisorRecall', 'no']}
				/>
				<Element
					type='sl'
					msg='Wann darf sie ihr persönlichen Berater anrufen?'
				/>
				<Element
					type='you'
					msg='Ich bin erreichbar:'
					values={['Vormittag', 'Nachmittag', 'Abend']}
				/>
				<Element
					type='sl'
					msg='Danke, ihr Berater wird so morgen Vormittag zurückrufen. Kann ich sonst noch etwas für sie tun?'
				/>
				<Element
					type='you'
					msg='Danke,'
					options={['contactAdvisorMessage', 'no']}
				/>{' '}
				<Element
					type='sl'
					msg='Bitte schreiben sie ihre Nachricht an ihren persönlichen Berater'
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
