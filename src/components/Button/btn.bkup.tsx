import { styled } from "@mui/system"; 
import { Theme } from '@mui/material';
import { CircularProgress } from '@mui/material';

export interface ButtonProps {
  label: string;
  variant?: 'primary' | 'secondary' | 'ghost';
  isLoading?: boolean;
  onClick?: () => void;
  style?: React.CSSProperties;
  muiProps?: React.HTMLProps<HTMLButtonElement>;
  href?: string;
  type?: 'default' | 'success' | 'danger' | 'warning';
  disabled?: boolean;
  outlined?: boolean;
  loaderColor?: string;
  Css?: string; // Add a new prop for custom CSS
}

const useStyles = styled((theme: Theme) => ({
  root: {
    padding: 8,
    borderRadius: 4,
    cursor: 'pointer',
    textDecoration: 'none',
  },
  primary: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    border: 'none',
  },
  secondary: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
    border: 'none',
  },
  ghost: {
    backgroundColor: 'transparent',
    color: theme.palette.text.primary,
    border: `1px solid ${theme.palette.text.primary}`,
  },
  outlined: {
    backgroundColor: 'transparent',
    border: `1px solid ${theme.palette.primary.main}`,
    color: theme.palette.primary.main,
  },
  success: {
    backgroundColor: theme.palette.success.main,
    color: theme.palette.success.contrastText,
  },
  danger: {
    backgroundColor: theme.palette.error.main,
    color: theme.palette.error.contrastText,
  },
  warning: {
    backgroundColor: theme.palette.warning.main,
    color: theme.palette.warning.contrastText,
  },
}));

const Button = ({ ...props }: ButtonProps) => {
  const classes = useStyles(props);

  const getButtonStyles = () => {
    switch (props.variant) {
      case 'primary':
        return classes.primary;
      case 'secondary':
        return classes.secondary;
      case 'ghost':
        return classes.ghost;
      default:
        return classes.root;
    }
  };

  const getButtonTypeStyles = () => {
    switch (props.type) {
      case 'success':
        return classes.success;
      case 'danger':
        return classes.danger;
      case 'warning':
        return classes.warning;
      default:
        return {};
    }
  };

  return (
    <button
      {...props}
      className={[getButtonStyles(), getButtonTypeStyles()].join(' ')}
      type={props.type === 'default' ? undefined : props.type as "button" | "reset" | "submit"}
      disabled={props.disabled}
    >
      {props.isLoading ? <CircularProgress /> : props.label}
    </button>
  );
};

export default Button;
