import { ButtonHTMLAttributes, ReactElement } from 'react';
import clsx from 'clsx';
import style from './Button.module.css';

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  className?: string;
  large?: boolean;
  onClick?: () => void;
  pill?: boolean;
  variant?: 'primary' | 'secondary';
}

const Button = ({
  children = 'Click',
  className,
  large = false,
  onClick = (): void => { },
  pill = false,
  variant,
  ...props
}: IProps): ReactElement => (
  <button
    {...props}
    type="button"
    className={clsx(
      style.button,
      className,
      pill && style.pill,
      large && style.large,
      variant && style[variant],
    )}
    onClick={onClick}
  >
    {children}
  </button>
);

export default Button;
