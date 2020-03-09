import styled, { css } from 'styled-components';
import { rgba, lighten, darken } from 'polished';
import { Sort, Format, Appearance } from '../../common/types';
import { colors } from '../../common/global-style';

import sortAscSvg from './img/sort-asc.svg';
import sortDescSvg from './img/sort-desc.svg';

interface StyledTrProps extends React.HTMLAttributes<HTMLTableRowElement> {
	selectable?: boolean;
	expandable?: boolean;
	selected?: boolean;
	appearance?: Appearance;
}

interface StyledTdProps extends React.HTMLAttributes<HTMLTableDataCellElement> {
	appearance?: Appearance;
	format?: Format;
}

interface StyledThProps extends React.HTMLAttributes<HTMLTableHeaderCellElement> {
	sort?: Sort;
}

export const StyledTable = styled.table`
	width: 100%;
	border-collapse: separate;
`;

const noBorderCurrentRowCells = css`
	td { border-top-color: transparent; }
`;

const noBorderNextRowCells = css`
	& + tr {
		${noBorderCurrentRowCells}
	}
`;

const roundedCornersCurrentRowCells = css`
	td:first-child { border-radius: var(--border-radius) 0 0 var(--border-radius); }
	td:last-child { border-radius: 0 var(--border-radius) var(--border-radius) 0; }
`;

export const StyledTr = styled.tr<StyledTrProps>`
	transition: all var(--short-delay) linear;

	td { border-top-color: var(--table-line-color); }
	/* &:first-child td { border-top-color: transparent; } */

	${props => props.selectable && css`
		&:hover {
			box-shadow: 0px 8px 12px rgba(0,0,0,0.08), 0px 4px 6px rgba(0,0,0, 0.04);
			border-radius: var(--border-radius);
			cursor: pointer;

			td {
				border-color: ${lighten(.05, colors.tableLine)} var(--table-line-color) ${darken(.02, colors.tableLine)} var(--table-line-color);
			}

			${noBorderNextRowCells}
			${roundedCornersCurrentRowCells}
		}
	`}

	${props => props.selected && css`
		td, &:hover td {
			background: ${rgba(colors.accent, .1)};
			border-color: ${rgba(colors.accent, .6)} !important;
		}

		${noBorderNextRowCells}
		${roundedCornersCurrentRowCells}
	`}

	${props => (props.appearance === Appearance.group) && css`
		&:not(:first-child) {
			${noBorderCurrentRowCells}
		}
		${noBorderNextRowCells}
	`}
`;

export const StyledTd = styled.td<StyledTdProps>`
	padding: 15px 16px;
	border: solid transparent;
	border-width: 1px 0;
	transition: all var(--short-delay) linear;

	&:first-child { border-left-width: 1px; }
	&:last-child { border-right-width: 1px; }

	${props => props.appearance === Appearance.strong && css`
		color: #000;
		font-weight: var(--semibold);
	`}

	${props => props.appearance === Appearance.group && css`
		font-weight: var(--bold);
	`}

	${props => props.format === Format.number && css`
		width: 10%;
		text-align: right;
		padding-right: 30px;
	`}
`;

export const StyledTh = styled.th<StyledThProps>`
	padding: 16px 15px 15px 15px;
	text-align: left;
	font-weight: var(--bold);
	/* border-bottom: solid 1px var(--table-line-color); */
	cursor: pointer;

	${props => props.sort !== undefined && css`
		padding-left: 34px;
		color: var(--accent-color);
		position: relative;

		&::before {
			content: '';
			position: absolute;
			left: 16px;
			top: calc(50% - 8px);
			width: 16px;
			height: 16px;
			background-repeat: no-repeat;

			${props.sort === Sort.asc && css`
				background-image: url(${sortAscSvg});
			`}

			${props.sort === Sort.desc && css`
				background-image: url(${sortDescSvg});
			`}
		}
	`}
`;