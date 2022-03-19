import styled from 'styled-components';

interface ButtonProps {
  width?: number;
}

export const Button = styled.button<ButtonProps>`
  min-width: 50px;
  width: ${props => (props.width ? props.width : '100%')};
  height: 50px;
  background: var(--purple-500);
  border: 1px solid var(--gray-100);
  border-radius: 0.675rem;
  font-size: 0;

  transition: filter 0.2s;
  outline: none;

  &:hover {
    filter: brightness(0.9);
  }
`;
