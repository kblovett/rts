import { PropsWithChildren } from 'react';

interface ChildProps {
  color: string;
  onClick: () => void;
}

type ChildPWC = PropsWithChildren<ChildProps>;

export const ChildAsFC: React.FC<ChildPWC> = ({ color, onClick, children }) => {
  return (
    <div>
      Color: {color} <button onClick={onClick}>Click me</button> {children}
    </div>
  );
};
