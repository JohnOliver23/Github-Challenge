import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Input from 'components/Input';
import { FiSearch } from 'react-icons/fi';
import '@testing-library/jest-dom/extend-expect';

describe('Input component', () => {
  it('should be able to render an input', () => {
    const { getByPlaceholderText } = render(
      <Input icon={FiSearch} name="search" placeholder="Search" />,
    );
    expect(getByPlaceholderText('Search')).toBeTruthy();
  });

  it('should render color on input focus', async () => {
    const { getByPlaceholderText, getByTestId } = render(
      <Input name="email" placeholder="E-mail" />,
    );
    const inputElement = getByPlaceholderText('E-mail');
    const containerElement = getByTestId('input-container');

    fireEvent.focus(inputElement);

    expect(await containerElement).toHaveStyle('color: #333');
  });

  it('should not render color on input blur', async () => {
    const { getByPlaceholderText, getByTestId } = render(
      <Input name="email" placeholder="E-mail" />,
    );
    const inputElement = getByPlaceholderText('E-mail');
    const containerElement = getByTestId('input-container');

    fireEvent.blur(inputElement);

    expect(await containerElement).not.toHaveStyle('color: #333');
  });
});
