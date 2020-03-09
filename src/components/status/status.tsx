import React from 'react';
import { StatusType } from '../../common/types';
import { StyledSpan } from './status.styles';

export interface StatusProps {
	type: StatusType;
}

const titles = {
	[StatusType.approved]: 'Approved',
	[StatusType.refunded]: 'Refunded',
	[StatusType.partialRefund]: 'Partial Refund',
	[StatusType.declined]: 'Declined',
};

const Status = ({ type }: StatusProps) => (
	<StyledSpan type={type}>
		{titles[type]}
	</StyledSpan>
);

export default Status;