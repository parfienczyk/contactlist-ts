import { ReactNode } from "react";

import { Wrapper } from "./card.styles";

type Props = {
  children: ReactNode;
  isSelected?: boolean;
  onClick?: () => void;
};

export const Card = ({ children, isSelected = false, onClick }: Props) => {
  return (
    <Wrapper isSelected={isSelected} onClick={onClick}>
      {children}
    </Wrapper>
  );
};
