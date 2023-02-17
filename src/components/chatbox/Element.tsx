import { useRef, useState } from 'react';
import useAutosizeTextArea from './useAutosizeTextArea';
import Option from './option';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

interface ElementProps {
	type: string;
	msg: string;
	options?: string[];
	textbox?: boolean;
	values?: string[];
}

export default function Element(props: ElementProps) {
	const [value, setValue] = useState('');
	const textAreaRef = useRef<HTMLTextAreaElement>(null);

	useAutosizeTextArea(textAreaRef.current, value);

	const handleChange = (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
		const val = evt.target?.value;

		setValue(val);
	};

	return (
		<div className={`element ${props.type}`}>
			{props.msg}
			{props.options != null && (
				<div>
					{props.options.map((id) => {
						return <Option id={id} />;
					})}
				</div>
			)}
			{props.values != null && (
				<FormControl>
					<RadioGroup
						row
						name='row-radio-buttons-group'
					>
						{props.values.map((id) => {
							return (
								<FormControlLabel
									value={id}
									control={
										<Radio
											sx={{
												'& .MuiSvgIcon-root': {
													fontSize: 14,
													textColor: 'silver',
												},
											}}
										/>
									}
									label={id}
								/>
							);
						})}
					</RadioGroup>
				</FormControl>
			)}
			{props.textbox != null && (
				// https://mui.com/base/react-textarea-autosize/
				<textarea
					onChange={handleChange}
					placeholder='...'
					ref={textAreaRef}
					rows={2}
					value={value}
				/>
			)}
		</div>
	);
}
