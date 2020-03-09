import React from 'react';
import styled from 'styled-components';
import { PaymentMethodType } from '../../common/types';
import PaymentMethod from './payment-method';

export default {
	title: 'Miscellaneous',
	component: PaymentMethod,
};

const StyledPanel = styled.div`
	padding: 16px;
`;

export const PaymentMethodStory = () => (
	<React.Fragment>
		<StyledPanel>
			<PaymentMethod type={PaymentMethodType.visa} />
		</StyledPanel>
		<StyledPanel>
			<PaymentMethod type={PaymentMethodType.mastercard} />
		</StyledPanel>
		<StyledPanel>
			<PaymentMethod type={PaymentMethodType.applePay} />
		</StyledPanel>
		<StyledPanel>
			<PaymentMethod type={PaymentMethodType.unionPay} />
		</StyledPanel>
	</React.Fragment>
);

PaymentMethodStory.story = {
	name: 'Payment Method'
}