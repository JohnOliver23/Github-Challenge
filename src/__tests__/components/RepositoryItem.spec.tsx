import React from 'react';

import { render } from '@testing-library/react';
import RepositoryItem from 'components/RepositoryItem';
import { IRepository } from 'util/interfaces';

describe('RepositoryItem component', () => {
  const repository: IRepository = {
    id: 'AH12345ABSD1-Y25DA',
    createdAt: '2009-07-01T19:49:48Z',
    forkCount: 1,
    name: 'Test',
    description: 'description of test',
    primaryLanguage: {
      name: 'Javascript',
    },
    stargazers: {
      totalCount: 3,
    },
    url: '"https://github.com/johnOliver23/test',
  };

  it('should be able to render the RepositoryItem', () => {
    const { getByText } = render(<RepositoryItem repository={repository} />);
    expect(getByText('Test')).toBeTruthy();
  });

  it('should be able to render the RepositoryItem with totalCOunt of stargazers to equal 0', () => {
    repository.stargazers.totalCount = 0;
    const { getByText } = render(<RepositoryItem repository={repository} />);
    expect(getByText('Test')).toBeTruthy();
    expect(getByText('0')).toBeTruthy();
  });
});
