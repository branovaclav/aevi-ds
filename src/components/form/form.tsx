import React, { useState } from 'react';
import { InputMode } from './form.types';
import { StyledInputContainer, StyledInput, StyledLabel } from './form.styles';

export interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	label?: string,
	width?: string,
}

export const TextInput = (props: TextInputProps) => {
	const { name, value = '', disabled, label, onChange, onBlur, onFocus, width, ...rest } = props;
	const initialMode = label === undefined ? InputMode.simple : (value ? InputMode.complexFilledIn : InputMode.complexEmpty);
	const [currentValue, changeCurrentValue] = useState(value);
	const [mode, changeMode] = useState<InputMode>(initialMode);

	const input = (
		<StyledInput
			type="text"
			name={name}
			value={currentValue}
			disabled={disabled}
			width={width}
			mode={mode}
			onChange={(event) => {
				changeCurrentValue(event.target.value);
				if (onChange)
					onChange(event);
			}}			
			onFocus={mode === InputMode.simple ? onFocus : (event) => {
				changeMode(InputMode.complexActive);
				if (onFocus)
					onFocus(event);
			}}
			onBlur={mode === InputMode.simple ? onBlur : (event) => {
				changeMode(currentValue ? InputMode.complexFilledIn : InputMode.complexEmpty);
				if (onBlur)
					onBlur(event);
			}}
			{...rest}
		/>
	);

	return mode === InputMode.simple ? input : (
		<StyledInputContainer width={width} disabled={disabled} {...rest}>
			<StyledLabel mode={mode} disabled={disabled}>{label}</StyledLabel>
			{input}
		</StyledInputContainer>
	);
};
