import React from 'react';
import styled from 'styled-components';

type ButtonPurpose = 'default' | 'primary' | 'secondary' | 'cancel' | 'danger';

export interface Props {
	purpose: ButtonPurpose;
	// type?: 'button' | 'submit';
	disabled?: boolean;
	onClick?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
	children: React.ReactNode
}

const StyledButton = styled.button`
	min-width: 100px;
	height: 44px;
	padding: 8px 32px;
	background: #4A83F2;
	border: none;
	font-size: 16px;
	color: white;
	border-radius: 22px;
	outline: none;

	&:hover {
		background: #457BE3;
		cursor: pointer;
	}
`;

export const Button = ({ purpose, disabled, onClick, children }: Props) => {
	const classNames = "button"

	return (
		<StyledButton
			type="button"
			disabled={disabled}
			onClick={onClick}
			className={classNames}
		>
			{children}
		</StyledButton>
	)
}

export default Button