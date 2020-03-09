import styled, { css } from 'styled-components';
import { hideText } from 'polished';
import { PaymentMethodType } from '../../common/types';

import paymentMethodVisaSvg from './img/payment-method-visa.svg';
import paymentMethodMastercardSvg from './img/payment-method-mastercard.svg';
import paymentMethodApplePaySvg from './img/payment-method-apple-pay.svg';
import paymentMethodUnionPaySvg from './img/payment-method-union-pay.svg';

interface StyledSpanProps extends React.HTMLFactory<HTMLSpanElement>{
	type: PaymentMethodType;
};

export const StyledSpan = styled.span<StyledSpanProps>`
	display: block;
	width: 52px;
	line-height: 24px;
	margin: -5px 0; /* line-height compensation */
	background-repeat: no-repeat;
	${hideText()}

	${props => props.type === PaymentMethodType.visa && css`
		background-image: url(${paymentMethodVisaSvg});
	`}

	${props => props.type === PaymentMethodType.mastercard && css`
		background-image: url(${paymentMethodMastercardSvg});
	`}

	${props => props.type === PaymentMethodType.applePay && css`
		background-image: url(${paymentMethodApplePaySvg});
	`}

	${props => props.type === PaymentMethodType.unionPay && css`
		background-image: url(${paymentMethodUnionPaySvg});
	`}
`;
