import * as React from 'react';

interface Props {
  onClick: any;
}

export const ControlPanel = ({ onClick }: Props) => {
  return (
    <button onClick={onClick}>Focus</button>
  );
}
