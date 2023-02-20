type Option = {
	id: string;
	text: string;
	next?: string;
	icon?: string;
	action?: string;
};

const dummyOptions: Option[] = [
	{
		id: 'contract',
		text: 'Verträge',
	},
	{
		id: 'account',
		text: 'Profil',
	},
	{
		id: 'documents',
		text: 'Dokumente',
		action: '#/documentarchive',
	},
	{
		id: 'contact',
		text: 'Beratung',
	},
	{
		id: 'certificate',
		text: 'Vorsorgeausweis',
	},
	{
		id: 'phone',
		text: 'Telefonnummer',
		action: '#/profile/mobile-number-config',
	},
	{
		id: 'address',
		text: 'Adresse',
		action: '#/addressoverview',
	},
	{
		id: 'entry',
		text: 'Ja, ich habe noch eine Frage',
		icon: 'fa:address-card-o',
	},
	{
		id: 'no',
		text: 'Ich bin OK, danke',
		icon: 'fa:address-card-o',
	},
];

interface OptionProps {
	id: string;
	handler?: (params: string) => object;
}

export default function Option(props: OptionProps) {
	const option = dummyOptions.find((option) => option.id === props.id);

	function executor(option: Option) {
		// wenn eine Action vorhanden, hier aufrufen
		if (option.action != null) {
			alert(option.action);
		}
		props.handler(option?.id);
	}

	return (
		<div
			className='option'
			onClick={() => executor(option)}
		>
			{option?.text}
		</div>
	);
}
