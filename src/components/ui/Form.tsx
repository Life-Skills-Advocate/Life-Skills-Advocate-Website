'use client';

import React, { ReactNode } from 'react';

interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  children: ReactNode;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void | Promise<void>;
}

export function Form({
  children,
  onSubmit,
  className = '',
  ...props
}: FormProps) {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await onSubmit(e);
    } catch (error) {
      console.error('Form submission error:', error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={className}
      {...props}
    >
      {children}
    </form>
  );
}

export default Form;
