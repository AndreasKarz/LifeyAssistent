import React from 'react';

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
	return (
		<div style={MONITORBOXSTYLES}>
			<br />
			Monitor
			<pre></pre>
		</div>
	);
}
