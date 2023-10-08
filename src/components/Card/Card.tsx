// CustomCard.js
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CardActions from "@mui/material/CardActions";
import Paper from "@mui/material/Paper";
import { Theme } from "@mui/material/styles";
import { css } from "@emotion/react";
import { CSSObject } from "@mui/system";

interface CustomCardProps {
  variant?: "elevated" | "flat";
  padding?: string;
  margin?: string;
  display?: string;
  header?: React.ReactNode;
  content?: React.ReactNode;
  footer?: React.ReactNode;
  Css?: string; // Use SerializedStyles for Emotion CSS
  theme?: Theme;
  //allow children
  children?: React.ReactNode;  
}

const getCardStyles = (props: CustomCardProps) => css`
  box-shadow: ${props.variant === "elevated" ? props.theme?.shadows[4] : "none"};
  padding: ${props.padding || "16px"};
  margin: ${props.margin || "0"};
  display: ${props.display || "block"};
  ${props.Css};
`;

export const CustomCardHeader: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <CardHeader title={children} />
);

export const CustomCardContent: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <CardContent>{children}</CardContent>
);

export const CustomCardFooter: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <CardActions>{children}</CardActions>
);

const CustomCard: React.FC<CustomCardProps> = ({
  variant = "elevated",
  padding,
  margin,
  display,
  header,
  content,
  footer,
  Css,
  theme,
}) => {
  return (
    <Paper elevation={variant === "elevated" ? 4 : 0}  sx={getCardStyles({ variant, padding, margin, display, Css, theme }) as CSSObject}>
      <Card>
        {header && <CustomCardHeader>{header}</CustomCardHeader>}
        {content && <CustomCardContent>{content}</CustomCardContent>}
        {footer && <CustomCardFooter>{footer}</CustomCardFooter>}
      </Card>
    </Paper>
  );
};

export default CustomCard;
