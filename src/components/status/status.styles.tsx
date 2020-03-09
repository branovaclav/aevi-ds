import styled, { css } from 'styled-components';
import { StatusType } from '../../common/types';

import statusApprovedSvg from './img/status-approved.svg';
import statusRefundedSvg from './img/status-refunded.svg';
import statusPartialRefundSvg from './img/status-partial-refund.svg';
import statusDeclinedSvg from './img/status-declined.svg';

interface StyledSpanProps extends React.HTMLFactory<HTMLSpanElement>{
	type: StatusType;
};

export const StyledSpan = styled.span<StyledSpanProps>`
	padding-left: 28px;
	white-space: nowrap;
	position: relative;

	&::before {
		content: '';
		position: absolute;
		left: 0;
		top: calc(50% - 10px);
		width: 20px;
		height: 20px;
		border-radius: 50%;
		background-repeat: no-repeat;

		${props => props.type === StatusType.approved && css`
			background-image: url(${statusApprovedSvg});
			background-color: var(--status-default);
		`}

		${props => props.type === StatusType.refunded && css`
			background-image: url(${statusRefundedSvg});
			background-color: var(--status-accent);
		`}

		${props => props.type === StatusType.partialRefund && css`
			background-image: url(${statusPartialRefundSvg});
			background-color: var(--status-warning);
		`}

		${props => props.type === StatusType.declined && css`
			background-image: url(${statusDeclinedSvg});
			background-color: var(--status-error);
		`}
	}
`;
