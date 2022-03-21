import React from 'react';

import { render } from '@testing-library/react';
import RepositoryList from 'components/RepositoryList';
import { IRepository } from 'util/interfaces';

describe('RepositoryList component', () => {
  const repositories: IRepository[] = [
    {
      id: 'AH12345ABSD1-Y25DA',
      createdAt: '2009-07-01T19:49:48Z',
      forkCount: 0,
      name: 'Test',
      description: 'description of test',
      primaryLanguage: {
        name: 'Javascript',
      },
      stargazers: {
        totalCount: 3,
      },
      url: '"https://github.com/johnOliver23/test',
    },
    {
      id: 'AH12345ABSD1-Y25DA222',
      createdAt: '2009-07-01T19:49:48Z',
      forkCount: 0,
      name: 'Test2',
      description: 'description of test2',
      primaryLanguage: {
        name: 'Javascript',
      },
      stargazers: {
        totalCount: 3,
      },
      url: '"https://github.com/johnOliver23/test',
    },
  ];
  it('should be able to render the RepositoryList', () => {
    const { getByText } = render(
      <RepositoryList repositories={repositories} />,
    );
    expect(getByText('Test2')).toBeTruthy();
  });

  it('should be able to render the RepositoryList with desciption concat with ...', () => {
    repositories[0].description =
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rhoncus, ante id euismod finibus, mi risus';
    const { getByText } = render(
      <RepositoryList repositories={repositories} />,
    );
    expect(
      getByText(
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rhoncus, ante id euismod finibus, m...',
      ),
    ).toBeTruthy();
  });
});
