type Option = {
	id: string;
	text: string;
	icon: string;
	action: string;
};

const dummyOptions: Option[] = [
	{
		id: 'changeAddress',
		text: 'Adresse ändern',
		icon: 'fa:address-card-o',
		action: 'Profile/AddressChange öffnen',
	},
	{
		id: 'orderCertificate',
		text: 'Vorsorgeausweis',
		icon: 'fa:address-card-o',
		action: '',
	},
	{
		id: 'simEarlyRetirement',
		text: 'Frühpensionierung',
		icon: 'fa:address-card-o',
		action: '',
	},
	{
		id: 'contactAdvisorPhone',
		text: 'Anrufen',
		icon: 'fa:address-card-o',
		action: '',
	},
	{
		id: 'contactAdvisorMessage',
		text: 'Nachricht schreiben',
		icon: 'fa:address-card-o',
		action: '',
	},
	{
		id: 'contactAdvisorRecall',
		text: 'Bitte um Rückruf',
		icon: 'fa:address-card-o',
		action: '',
	},
	{
		id: 'no',
		text: 'Ich bin OK, danke',
		icon: 'fa:address-card-o',
		action: '',
	},
];

interface OptionProps {
	id: string;
}

export default function Option(props: OptionProps) {
	const option = dummyOptions.find((option) => option.id === props.id);

	return <div className='option'>{option?.text}</div>;
}
