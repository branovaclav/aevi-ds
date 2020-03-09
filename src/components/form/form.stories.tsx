import React from 'react';
import styled from 'styled-components';

import * as Form from './form';

export default {
	title: 'Form',
	component: Form,
};

const StyledPanel = styled.div`
	width: 320px;
	padding: 12px;
`;

export const TextInput = () => (
	<React.Fragment>
		<StyledPanel>
			<Form.TextInput name="firstname" label="First Name" value="John" />
		</StyledPanel>
		<StyledPanel>
			<Form.TextInput name="middlename" label="Middle Name" />
		</StyledPanel>
		<StyledPanel>
			<Form.TextInput name="lastname" label="Last Name" />
		</StyledPanel>
		<StyledPanel>
			<Form.TextInput name="occupation" label="Occupation" />
		</StyledPanel>
		<StyledPanel>
			<Form.TextInput name="childsupport" label="Child Support" disabled />
		</StyledPanel>
		<StyledPanel>
			<Form.TextInput name="simple" value="Simple" width="192px" />
		</StyledPanel>
	</React.Fragment>
)