import styled from "styled-components";

const Input = styled.input`
  padding: 16px 24px;
  background: ${({ theme }) => theme.background};
  border: none;
  border-radius: 4px;
  margin: 8px 0;
  color: ${({ theme }) => theme.text};
`;

export default Input;
