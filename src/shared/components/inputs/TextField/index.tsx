import React from 'react';
import './styles.scss';

export interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  register: (name: string) => ({ required: boolean });
}

const TextField = ({ label, name, register, ...props }: TextFieldProps) => {
  return (
    <div className="text-field__container">
      <label htmlFor={props.id}>{label}</label>
      <input {...props} {...register(name)} />
    </div>
  );
};

export default TextField;
