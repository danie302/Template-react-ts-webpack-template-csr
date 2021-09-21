// Dependencies
import React from "react";
import { ButtonProps, ButtonColor } from "./button.const";

// Assets
import "./index.scss";

function Button({ children, onClick, className, color, ...props }: ButtonProps): JSX.Element {
    let buttonClass = className;
    switch (color) {
        case ButtonColor.primary:
            buttonClass = `${className} btn btn--primary`;
            break;
        case ButtonColor.secondary:
            buttonClass = `${className} btn btn--secondary`;
            break;
        case ButtonColor.light:
            buttonClass = `${className} btn btn--light`;
            break;
        case ButtonColor.tertiary:
            buttonClass = `${className} btn btn--tertiary`;
            break;
        default:
            break;
    }
    return (
        <button
            className={buttonClass}
            onClick={() => {
                onClick();
            }}
            {...props}
        >
            {children}
        </button>
    );
}

export default Button;
