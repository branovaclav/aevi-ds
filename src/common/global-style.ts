import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const colors = {
    accent: '#2E57E1',

    inputLine: '#D2D7E0',
    inputFill: '#FFF',
    inputDisabledFill: '#FAFBFC',

    tableLine: '#E0E3E6',

    shadow: '#000',  

    defaultText: '#333',
    inputLabelText: '#AAB2BB',

    statusDefault: 'transparent',
    statusAccent: '#51A6EC',
    statusWarning: '#EF8F49',
    statusError: '#DC4141'
};

export const weights = {
    ultralight: 100,
    light: 200,
    thin: 300,
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    heavy: 800,
    black: 900
};

export const delays = {
    short: '.2s',
    medium: '.5s', //unused
    long: '.8s' //unused
};

export const misc = {
    borderRadius: '6px'
};

export const GlobalStyle = createGlobalStyle`
    ${reset}

    :root {
        /* colors */
          /* interface */
        --accent-color: ${ colors.accent };

        --input-line-color: ${colors.inputLine};
        --input-fill-color: ${colors.inputFill};
        --input-disabled-fill-color: ${colors.inputDisabledFill};

        --table-line-color: ${colors.tableLine};

        --shadow-color: ${colors.shadow};

          /* typography */
        --default-text-color: ${colors.defaultText};
        --input-label-text: ${colors.inputLabelText};

          /* status */
        --status-default: ${colors.statusDefault};
        --status-accent: ${colors.statusAccent};
        --status-warning: ${colors.statusWarning};
        --status-error: ${colors.statusError};

        /* font-weights */
        --ultralight: ${ weights.ultralight };
        --light: ${ weights.light };
        --thin: ${ weights.thin };
        --regular: ${ weights.regular };
        --medium: ${ weights.medium };
        --semibold: ${ weights.semibold };
        --bold: ${ weights.bold };
        --heavy: ${ weights.heavy };
        --black: ${ weights.black };

        /* transitions */
        --short-delay: ${ delays.short };
        --medium-delay: ${ delays.medium };
        --long-delay: ${ delays.long };

        /* miscellaneous */
        --border-radius: ${ misc.borderRadius };

        *, *::before, *::after {
            box-sizing: border-box;
        }

        &, input, select, textarea {
            color: var(--default-text-color);
            font-size: 14px;
            line-height: 1.15;
            font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
        }
    }
`;

export default GlobalStyle;
