import { css } from '@emotion/react';

export const global = css`
  * {
    margin: 0 auto;
    padding: 0;
    font-family: 'SpoqaHanSansNeo-Regular';
  }

  @font-face {
    font-family: 'SpoqaHanSansNeo-Regular';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2108@1.1/SpoqaHanSansNeo-Regular.woff')
      format('woff');
    font-weight: normal;
    font-style: normal;
  }

  body {
    box-sizing: border-box;
  }
`;
