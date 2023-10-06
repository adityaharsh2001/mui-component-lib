import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { CircularProgress } from "@mui/material";

export interface ButtonProps {
  label: string;
  variant?: "primary" | "secondary" | "ghost";
  isLoading?: boolean;
  onClick?: () => void;
  style?: {
    [key: string]: any;
  };
  muiProps?: {
    [key: string]: any;
  };
}

const ButtonContainer = styled.button<ButtonProps>`
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;

  ${(props) => {
    switch (props.variant) {
      case "primary":
        return css`
          background-color: #000000;
          color: #ffffff;
        `;
      case "secondary":
        return css`
          background-color: #ffffff;
          color: #000000;
          border: 1px solid #000000;
        `;
      case "ghost":
        return css`
          background-color: transparent;
          color: #000000;
          border: 1px solid #000000;
        `;
      default:
        return css``;
    }
  }}

  ${(props) => {
    if (props.isLoading) {
      return css`
        opacity: 0.5;
        pointer-events: none;
      `;
    } else {
      return css``;
    }
  }}

  ${(props) => {
    // Add MUI props
    if (props.muiProps) {
      return css(props.muiProps);
    } else {
      return css``;
    }
  }}
`;


const Button = (props: ButtonProps) => {
  return (
    <ButtonContainer {...props}>
      {props.isLoading ? <CircularProgress /> : props.label}
    </ButtonContainer>
  );
};

export default Button;
