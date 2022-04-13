import React from 'react';
import { calcButton } from './buttons.module.scss';

interface Props {
  type: 'actions' | 'digits';
}
export default function Buttons({ type }: Props) {
  const buttons = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div className={calcButton}>
      {buttons.map((item) => <button type="button" className="calc__button">{item}</button>)}
    </div>
  );
}
