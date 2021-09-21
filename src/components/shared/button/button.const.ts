// Button Component interfaces

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    color?: ButtonColor;
    onClick?: () => void;
    className?: string;
}

export enum ButtonColor {
    light = "light",
    primary = "primary",
    tertiary = "tertiary",
    secondary = "secondary"
}
