import { StyledButton } from './Button.styles';
import { ButtonHTMLAttributes, ReactNode, Ref, forwardRef } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    secondary?: boolean;
    children?: ReactNode;
    rounded?: boolean;
}

const Button = forwardRef(({ children, rounded, secondary, ...props }: ButtonProps, ref: Ref<HTMLButtonElement>): JSX.Element => {
    return (
        <StyledButton {...props} ref={ref} rounded={rounded} secondary>
            {children}
        </StyledButton>
    );
});

Button.displayName = 'Button';

export default Button;
