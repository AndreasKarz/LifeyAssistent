import React from 'react';
import { Icon } from '@iconify/react';

const HEADERSTYLES = {
	height: '50px',
	backgroundColor: '#B4495E',
	width: '100%',
	display: 'flex',
};

function Header() {
	return (
		<div style={HEADERSTYLES}>
			<div>
				{' '}
				<Icon
					style={{ padding: '9px 18px 9px 18px' }}
					icon='carbon:help-desk'
					color='white'
					width='32'
					height='32'
					inline={true}
				/>
			</div>
			<div
				style={{ lineHeight: '50px' }}
				className='header'
			>
				Lifey Assistent
			</div>
			<div style={{ flexGrow: 1, textAlign: 'right' }}>
				<Icon
					style={{ padding: '9px 18px 9px 18px' }}
					icon='material-symbols:keyboard-arrow-down-rounded'
					color='white'
					width='32'
					height='32'
					inline={true}
				/>
			</div>
		</div>
	);
}

export default Header;
