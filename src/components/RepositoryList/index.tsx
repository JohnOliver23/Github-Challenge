import React, { useMemo } from 'react';
import { IRepository } from 'util/interfaces';
import { RepositoryItem } from 'components/RepositoryItem';
import styles from './styles.module.scss';

type RepositoriesProps = {
  repositories: IRepository[];
};

function RepositoryList({ repositories }: RepositoriesProps) {
  // transformation repositories to concat description
  const repositoryList = useMemo(
    () =>
      repositories.map(repository => ({
        ...repository,
        description:
          repository.description && repository.description.length > 100
            ? repository.description.substr(0, 100).concat('...')
            : repository.description,
      })),
    [repositories],
  );

  return (
    <div className={styles.repositoriesContainer}>
      {repositoryList.map(repository => (
        <RepositoryItem repository={repository} />
      ))}
    </div>
  );
}

export default RepositoryList;
