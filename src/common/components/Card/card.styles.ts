import styled from "@emotion/styled";

export const Wrapper = styled.div<{ isSelected: boolean }>`
  border: 2px solid
    ${({ isSelected }) => (isSelected ? "var(--accent-color)" : "transparent")};
  margin: 10px 5px;
  max-width: 300px;
  width: 100%;

  @media only screen and (min-width: 768px) {
    &:hover {
      border-color: var(--accent-color);
    }
  }
`;
