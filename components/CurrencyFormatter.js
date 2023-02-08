import React from 'react';

function CurrencyFormatter( value ) {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });
  return <>{formatter.format(value)}</>;
}

export default CurrencyFormatter;