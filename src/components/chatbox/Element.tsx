import Option from './option';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { TextareaAutosize } from '@mui/material';
import { ChatElementType } from '../../context/chatContext';

interface ElementProps {
	element: ChatElementType;
	type: string;
	text: string;
	last: boolean;
}

export default function Element(props: ElementProps) {
	const elm = props.element;

	return (
		<div className={`element ${props.type} ` + (props.last ? '' : ' disabled')}>
			{props.text}
			{props.type === 'you' && elm.answer?.options != null && (
				<div>
					{elm.answer?.options.map((id) => {
						return (
							<Option
								id={id}
								uuid={elm.uuid}
								key={elm.uuid + id}
							/>
						);
					})}
				</div>
			)}
			{props.type === 'you' && elm.answer?.values != null && (
				<FormControl>
					<RadioGroup
						row
						name='row-radio-buttons-group'
					>
						{elm.answer?.values.map((id) => {
							return (
								<FormControlLabel
									key={elm.uuid + id}
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
			{props.type === 'you' && elm.answer?.textbox != null && <TextareaAutosize />}
		</div>
	);
}
