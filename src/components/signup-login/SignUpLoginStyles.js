import styled from "styled-components";
import Button from "@material-ui/core/Button";
import { Form } from "formik";

export const SignUpButton = styled(Button)`
  background: linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%);
  border-radius: 3px;
  border: 0;
  color: white;
  height: 48px;
  padding: 0 30px;
  box-shadow: 0 3px 5px 2px rgba(255, 105, 135, 0.3);
  width: 100%;
`;

export const SignUpWrapper = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: center
  margin-bottom: 15px;
`;
export const StyledForm = styled(Form)`
  margin: 0 auto;
`;
