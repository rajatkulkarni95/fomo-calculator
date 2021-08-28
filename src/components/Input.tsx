import styled from "styled-components";
import { font } from "../theme/theme";

const Input = styled.input`
  padding: 16px 24px;
  background: ${({ theme }) => theme.background};
  border: none;
  border-radius: 4px;
  margin: 8px 0;
  color: ${({ theme }) => theme.text};
  font-size: 18px;
  font-family: ${font.family};
`;

export default Input;
