/* eslint-disable @typescript-eslint/no-explicit-any */
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { Theme } from '@mui/material/styles';
import { CircularProgress } from "@mui/material";

export interface ButtonProps {
  label: string;
  variant?: "primary" | "secondary" | "ghost";
  isLoading?: boolean;
  onClick?: () => void;
  style?: React.CSSProperties;
  muiProps?: React.HTMLProps<HTMLButtonElement>;
  href?: string;
  type?: "default" | "success" | "danger" | "warning";
  disabled?: boolean;
  outlined?: boolean;
  loaderColor?: string;
  Css?: string; // Add a new prop for custom CSS
  theme?: Theme;
}

const getButtonStyles = ( { variant, outlined }: ButtonProps, theme: Theme ) => {
  const commonStyles = css`
    padding: 8px 16px;
    border-radius: 4px;
    cursor: pointer;
    text-decoration: none;
  `;

  switch (variant) {
    case "primary":
      return css`
        ${commonStyles}
        background-color: ${theme.palette.primary.main};
        color: ${theme.palette.primary.contrastText};
        border: none;
        ${outlined &&
        css`
          background-color: transparent;
          color: ${theme.palette.primary.main};
          border: 1px solid ${theme.palette.primary.main};
        `}
      `;
    case "secondary":
      return css`
        ${commonStyles}
        background-color: ${theme.palette.secondary.main};
        color: ${theme.palette.secondary.contrastText};
        border: none;
        ${outlined &&
        css`
          background-color: transparent;
          color: ${theme.palette.secondary.main};
          border: 1px solid ${theme.palette.secondary.main};
        `}
      `;
    case "ghost":
      return css`
        ${commonStyles}
        background-color: transparent;
        color: ${theme.palette.text.primary};
        border: 1px solid ${theme.palette.text.primary};
        ${outlined &&
        css`
          background-color: transparent;
          color: ${theme.palette.primary.main};
          border: 1px solid ${theme.palette.primary.main};
        `}
      `;
    default:
      return css`
        ${commonStyles}
      `;
  }
};

const getButtonTypeStyles = (
  { type }: ButtonProps,
  theme: Theme
) => {
  switch (type) {
    case "success":
      return css`
        background-color: ${theme.palette.success.main};
        color: ${theme.palette.success.contrastText};
      `;
    case "danger":
      return css`
        background-color: ${theme.palette.error.main};
        color: ${theme.palette.error.contrastText};
      `;
    case "warning":
      return css`
        background-color: ${theme.palette.warning.main};
        color: ${theme.palette.warning.contrastText};
      `;
    default:
      return css``;
  }
}

const ButtonContainer = styled.button<ButtonProps>`
  ${(props) => getButtonStyles(props, props.theme)}
  ${(props) => getButtonTypeStyles(props, props.theme)}
  ${(props) => css`${props.Css}`}
`;

const LinkContainer = ButtonContainer.withComponent("a");

const Button = (props: ButtonProps) => {
  const { href, type, disabled } = props;
  const buttonType = type || "default";
  const loaderColor = props.loaderColor || "info";
  const Container = href ? LinkContainer : ButtonContainer;

  return (
    <Container
      {...props}
      type={buttonType as any}
      disabled={disabled}
    >
      {props.isLoading ? <CircularProgress color={loaderColor as any} /> : props.label}
    </Container>
  );
};

export default Button;
