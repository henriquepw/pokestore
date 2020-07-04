import '@emotion/styled';

import { Theme as ThemeType } from '../styles/theme';

declare module '@emotion/styled' {
  declare const styled: CreateStyled<ThemeType>;
  export default styled;
}
