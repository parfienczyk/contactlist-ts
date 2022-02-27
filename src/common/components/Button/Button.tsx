import styled from "@emotion/styled";

export const Button = styled.button`
  align-items: center;
  background-color: var(--cinnabar-color);
  border-radius: 4px;
  border: none;
  box-sizing: border-box;
  color: var(--white-color);
  cursor: pointer;
  display: inline-flex;
  font-weight: bold;
  justify-content: center;
  min-width: 64px;
  outline: none;
  overflow: visible;
  padding: 10px 20px;
  position: relative;
  text-transform: uppercase;
  user-select: none;
  vertical-align: middle;

  &:hover {
    box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%),
      0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
    transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.6;
  }
`;
