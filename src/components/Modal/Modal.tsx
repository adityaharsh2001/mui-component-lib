import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import { Theme } from "@mui/material/styles";
import { css } from "@emotion/react";
import Draggable from "react-draggable";

interface CustomModalProps {
  open: boolean;
  onClose: () => void;
  padding?: string;
  margin?: string;
  display?: string;
  Css?: string; // Use SerializedStyles for Emotion CSS
  theme?: Theme;
  children?: React.ReactNode;
}

const getModalStyles = (props: CustomModalProps) => css`
  display: ${props.display || "block"};
  ${props.Css};
`;

const PaperComponent = (props: React.HTMLAttributes<HTMLDivElement>) => {
    return (
        <Draggable
            handle="#draggable-dialog-title"
            cancel={'[class*="MuiDialogContent-root"]'}
        >
            <div {...props} />
        </Draggable>
    );
};

const CustomModal: React.FC<CustomModalProps> = ({
  open,
  onClose,
  padding,
  margin,
  display,
  Css,
  children,
}) => {
  return (
    <Dialog
        open={open}
        onClose={onClose}
        PaperComponent={PaperComponent}
        PaperProps={{
            style: {
                padding: padding || "16px",
                margin: margin || "0",
                outline: "none",
                ...(display || Css ? getModalStyles({ display, Css, open, onClose }) : {}),
            },
        }}
    >
        <DialogTitle style={{ cursor: "move" }} id="draggable-dialog-title">
        {children}
      </DialogTitle>
    </Dialog>
  );
};

export default CustomModal;
