import React from 'react';
import { action } from '@storybook/addon-actions';
import faker from 'faker';
import { Id, StatusType, PaymentMethodType, Format, Appearance, Sort } from '../../common/types';
import * as Table from './table';
import Status from '../status/status';
import PaymentMethod from '../payment-method/payment-method';


export default {
	title: 'Table',
	component: Table,
};

faker.seed(0);

const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
const TERMINALS = ['Main', 'Office', 'Front Desk', 'Cash Desk', 'Portable'];
const STATUSES = [StatusType.approved, StatusType.refunded, StatusType.partialRefund, StatusType.declined];
const PAYMENT_METHODS = [PaymentMethodType.visa, PaymentMethodType.mastercard, PaymentMethodType.applePay, PaymentMethodType.unionPay];
const GROUPS = ['London Store', 'Helsinki Store', 'Oslo Store', 'Berlin Store'];

const generateRecord = () => {
	const date = faker.date.recent();
	return {
		date: `${DAYS[date.getDay()]}, ${MONTHS[date.getMonth()]} ${date.getDate()}`,
		time: `${('0' + date.getHours()).slice(-2)}:${(('0' + date.getMinutes()).slice(-2))}`,
		amount: `$${faker.random.number(({min:1, max:149}))}.${faker.random.arrayElement(['00','80','90','99'])}`,
		terminal: faker.random.arrayElement(TERMINALS),
		status: STATUSES[Math.max(faker.random.number(8 + 3) - 8, 0)],
		paymentMethod: faker.random.arrayElement(PAYMENT_METHODS),
	}
}

const generateRecords = (length = 10) => Array.from({ length }, generateRecord);

interface SampleTableProps {
	items: number,
	grouped?: boolean
}

class SampleTable extends React.PureComponent<SampleTableProps> {
	onRowClick: (id: Id) => void;
	onSortClick: (id: Id) => void;

	constructor(props: SampleTableProps) {
		super(props);

		this.onRowClick = (id) => {
			action(`Row with id ${id} selected.`);
			console.log(id);
		}

		this.onSortClick = (id) => {
			action(`Column with id ${id} selected.`);
		}
	}

	render () {
		return (
			<Table.Table selectable onRowClick={this.onRowClick}>
				<Table.Header>
					<Table.HeaderRow>
						<Table.HeaderCell sort={Sort.asc}>Time</Table.HeaderCell>
						<Table.HeaderCell>Amount</Table.HeaderCell>
						<Table.HeaderCell>Terminal</Table.HeaderCell>
						<Table.HeaderCell>State</Table.HeaderCell>
						<Table.HeaderCell>Payment Method</Table.HeaderCell>
					</Table.HeaderRow>
				</Table.Header>
				<Table.Body>
					{generateRecords(this.props.items).map((record, index) => (
						<React.Fragment key={index}>
							{this.props.grouped && (index % 10) === 0 && (
								<Table.Group>
									{GROUPS[Math.floor(index / 10)]}
								</Table.Group>
							)}
							<Table.Row id={index}>
								<Table.Cell>
									{record.date}
									{record.time}
								</Table.Cell>
								<Table.Cell format={Format.number} appearance={Appearance.strong}>{record.amount}</Table.Cell>
								<Table.Cell>{record.terminal}</Table.Cell>
								<Table.Cell><Status type={record.status} /></Table.Cell>
								<Table.Cell><PaymentMethod type={record.paymentMethod} /></Table.Cell>
							</Table.Row>
						</React.Fragment>
					))}
				</Table.Body>
			</Table.Table>
		)
	}
}

export const SimpleTable = () => (
	<SampleTable items={12} />
)

export const GroupedTable = () => (
	<SampleTable items={24} grouped />
)
