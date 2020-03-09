import React from 'react';
import styled from 'styled-components';
import { StatusType } from '../../common/types';
import Status from './status';

export default {
	title: 'Miscellaneous',
	component: Status,
};

const StyledPanel = styled.div`
	padding: 16px;
`;

export const StatusStory = () => (
	<React.Fragment>
		<StyledPanel>
			<Status type={StatusType.approved} />
		</StyledPanel>
		<StyledPanel>
			<Status type={StatusType.refunded} />
		</StyledPanel>
		<StyledPanel>
			<Status type={StatusType.partialRefund} />
		</StyledPanel>
		<StyledPanel>
			<Status type={StatusType.declined} />
		</StyledPanel>
	</React.Fragment>
)

StatusStory.story = {
	name: 'Status'
}