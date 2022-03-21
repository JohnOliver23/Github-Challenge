import React from 'react';

import { render } from '@testing-library/react';
import Header from 'components/Header';

describe('Header component', () => {
  it('should be able to render a Header', () => {
    const { getByText } = render(<Header />);
    expect(getByText('Github Search')).toBeTruthy();
  });
});
