import Option from './option';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { TextareaAutosize } from '@mui/material';

interface ElementProps {
	type: string;
	msg: string;
	options?: string[];
	textbox?: boolean;
	values?: string[];
	uuid?: string;
}

export default function Element(props: ElementProps) {
	return (
		<div className={`element ${props.type}`}>
			{props.msg}
			{props.options != null && (
				<div>
					{props.options.map((id) => {
						return (
							<Option
								id={id}
								uuid={props.uuid ?? crypto.randomUUID()}
								key={props.uuid + id}
							/>
						);
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
									key={props.uuid + id}
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
			{props.textbox != null && <TextareaAutosize />}
		</div>
	);
}
