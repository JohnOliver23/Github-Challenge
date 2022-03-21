import React from 'react';
import '@testing-library/jest-dom/extend-expect';

import { render } from '@testing-library/react';
import { Button } from 'components/Button/Button';

describe('Button component', () => {
  it('should be able to render the Button', () => {
    const { getByText } = render(<Button>Search</Button>);

    expect(getByText('Search')).toBeTruthy();
  });

  it('should be able to render the Button disabled', async () => {
    const { getByText } = render(
      <Button width={30} disabled>
        Search
      </Button>,
    );

    const button = getByText('Search');

    expect(await button).toHaveStyle('cursor: not-allowed');
  });
});
