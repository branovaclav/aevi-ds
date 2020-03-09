import React from 'react';
import { PaymentMethodType } from '../../common/types';
import { StyledSpan } from './payment-method.styles';

export interface PaymentMethodProps {
	type: PaymentMethodType;
}

const titles = {
	[PaymentMethodType.visa]: 'Visa',
	[PaymentMethodType.mastercard]: 'Master Card',
	[PaymentMethodType.applePay]: 'Apple Pay',
	[PaymentMethodType.unionPay]: 'Union Pay'
};

const Status = ({ type }: PaymentMethodProps) => (
	<StyledSpan type={type}>
		{titles[type]}
	</StyledSpan>
);

export default Status;