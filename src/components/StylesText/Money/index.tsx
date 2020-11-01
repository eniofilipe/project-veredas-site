import React from 'react';

interface MoneyProps {
  value: number;
  className?: string;
}

const index = ({ value, className }: MoneyProps) => (
  <span className={className}>
    {Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value)}
  </span>
);

export default index;
