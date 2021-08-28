import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    background: string;
    text: string;
    border: string;
    primary: string;
    accent: string;
    muted: string;
    positive: string;
    negative: string;
  }
}
