import * as React from 'react';

interface Props {
    type: 'actions' | 'digits';
}
export default function Buttons({ type }:Props) {
  const buttons = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div className="buttons">
      {buttons.map((item) => <button type="button" className="calc__button">{item}</button>)}
    </div>
  );
}
