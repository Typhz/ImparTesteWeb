import React from 'react';
import './styles.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  color?: 'primary' | 'secondary' | 'success' | 'error';
  variant?: 'contained' | 'outlined';
}

const Button = ({ variant = "contained", color="primary", children, ...props }: ButtonProps) => {
  return <button className={`button__container ${variant} ${color}`} {...props}>{children}</button>
}

export default Button;
