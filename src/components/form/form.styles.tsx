import styled, { css } from 'styled-components';
import { rgba, darken } from 'polished';
import { colors } from '../../common/global-style';
import { InputMode } from './form.types';

export const StyledInputContainer = styled.div<{ width?: string, disabled?: boolean }>`
    display: block;
    position: relative;

    ${props => props.width !== undefined && css`
            width: ${props.width};
    `};
`;

export const StyledLabel = styled.label<{ mode: InputMode, disabled?: boolean }>`
    position: absolute;
    top: 14px;
    left: 13px;
    color: var(--input-label-text);
    font-weight: var(--medium);

    pointer-events: none;
    transition: all var(--short-delay);
    transform-origin: top left;

    ${props => (props.mode === InputMode.complexActive || props.mode === InputMode.complexFilledIn) && css`
        top: 6px;
        transform: scale(0.8);
    `}

    ${props => props.mode === InputMode.complexActive && css`
        color: var(--accent-color);
    `}

    ${props => props.disabled && css`
        color: ${rgba(colors.inputLabelText, .4)};
    `}
`;

export const StyledInput = styled.input<{ width?: string, mode: InputMode }>`
    display: block;
    width: 100%;

    padding: 12px;
    border: solid 1px var(--input-line-color);
    border-radius: var(--border-radius);
    background-color: var(--input-fill-color);


    &:hover {
        border-color: ${darken(.08, colors.inputLine)};
    }

    &:focus {
        border-color: ${rgba(colors.accent, .1)};
        box-shadow: 0 0 0 2px ${rgba(colors.accent, .1)};
        outline: none;
    }

    &[disabled] {
        background-color: var(--input-disabled-fill-color);
        border-color: ${rgba(colors.inputLine, .4)};
    }

    ${props => props.mode === InputMode.simple ? css`
        height: 36px;

        ${props.width !== undefined && css`
            width: ${props.width};
        `};
    ` : css`
        height: 42px;
        padding-top: 24px;
    `}
`;