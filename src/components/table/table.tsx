import React, { useState } from 'react';
import { Id, Sort, Format, Appearance } from '../../common/types';
import { StyledTable, StyledTr, StyledTh, StyledTd } from './table.styles';

export interface TableProps {
	selectable?: boolean;
	expandable?: boolean;
	selected?: Id;
	onRowClick?: (id: Id) => void;
	children?: React.ReactNode;
}

export interface RowProps {
	id?: number;
	children?: React.ReactNode;
}

export interface CellProps {
	format?: Format;
	appearance?: Appearance;
	children?: React.ReactNode;
}
 
export interface HeaderCellProps {
	sort?: Sort;
	children?: React.ReactNode;
}

export interface GroupProps {
	children: React.ReactNode;
}

interface ContextProps {
	selectable: boolean,
	expandable: boolean,
	selectedRow: Id | undefined,
	onRowClick: ((id: Id) => void) | undefined
}

const TableContext = React.createContext<Partial<ContextProps>>({});
TableContext.displayName = 'TableContext';

export const Table = (props: TableProps) => {
	const { selectable = false, expandable = false, onRowClick, children } = props;
	const [selectedRow, selectRow] = useState<Id | undefined>(undefined);

	const context: ContextProps = {
		selectable,
		expandable,
		selectedRow,
		onRowClick: selectable ? (id: Id) => {
			selectRow(id);
			if (onRowClick)
				onRowClick(id);
		} : undefined
	};

	return (
		<TableContext.Provider value={context}>
			<StyledTable>
				{children}
			</StyledTable>
		</TableContext.Provider>
	)
}

export const Row = ({ id, children }: RowProps) => (
	<TableContext.Consumer>
		{({ selectable, expandable, selectedRow, onRowClick}) => (
			<StyledTr
				selectable={selectable}
				expandable={expandable}
				selected={id === selectedRow}
				onClick={selectable && onRowClick && id !== undefined ? () => onRowClick(id) : undefined}
			>
				{children}
			</StyledTr>
		)}
	</TableContext.Consumer>
)

export const HeaderRow = ({ children }: RowProps) => (
	<StyledTr>
		{children}
	</StyledTr>
)

export const Cell = ({ format = Format.text, appearance = Appearance.regular, children }: CellProps) => (
	<StyledTd format={format} appearance={appearance}>
		{children}
	</StyledTd>
)

export const HeaderCell = ({ sort, children }: HeaderCellProps) => (
	<StyledTh sort={sort}>
		{children}
	</StyledTh>
);	

export const Group = ({ children }: GroupProps) => (
	<StyledTr appearance={Appearance.group}>
		<StyledTd appearance={Appearance.group} colSpan={100}>
			{children}
		</StyledTd>
	</StyledTr>
);

export const Header = ({ children }: { children?: React.ReactNode }) => (
	<thead>
		{children}
	</thead>
);

export const Body = ({ children }: { children?: React.ReactNode }) => (
	<tbody>
		{children}
	</tbody>
);

export const Footer = ({ children }: { children?: React.ReactNode }) => (
	<tfoot>
		{children}
	</tfoot>
);
