import styled from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
}

export const Container = styled.div<ContainerProps>`
  height: 50px;
  background: ${'var(--white)'};
  border-radius: 10px;
  border: 1px solid ${'var(--gray-200)'};
  padding: 16px;
  width: 100%;
  display: flex;
  align-items: center;
  transition: border-color 0.2s;
  & + div {
    margin-top: 8px;
  }
  ${props =>
    props.isFocused &&
    `
      border-color: var(--purple-500);
      svg {
        stroke: var(--purple-500);
      }
    `}
  input {
    outline: none;
    flex: 1;
    background: transparent;
    border: 0;
    font-family: 'Lexend';
    color: ${'var(--gray-500)'};
    &::placeholder {
      color: ${'var(--gray-200)'};
    }
  }
  svg {
    transition: stroke 0.2s;
    margin-right: 16px;
  }
`;
