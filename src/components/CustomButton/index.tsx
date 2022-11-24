import { ReactNode } from 'react';
import './styles.scss';

type CustomButtonParams = {
    onClick: () => void,
    children: ReactNode
}


export default function CustomButton({ onClick, children }: CustomButtonParams) {
  return (
    <div className="custom-button-container" onClick={onClick}>
      {children}
    </div>
  );
}