import styled from "styled-components";
import Input from "./Input";
import Label from "./Label";

const FormControl = () => {
  return (
    <Form>
      <Label>How much did you spend?</Label>
      <Input type="number" placeholder="20000" />
    </Form>
  );
};

const Form = styled.form`
  padding: 24px;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
`;

export default FormControl;
