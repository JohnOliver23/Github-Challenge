import React from 'react';
import { IRepository } from 'util/interfaces';
import { GrStatusGoodSmall } from 'react-icons/gr';
import { AiOutlineStar } from 'react-icons/ai';
import { GoRepoForked } from 'react-icons/go';
import styles from './styles.module.scss';

type RepositoyProps = {
  repository: IRepository;
};

export default function RepositoryItem({ repository }: RepositoyProps) {
  return (
    <div className={styles.repositoryContainer}>
      <div>
        <div className={styles.titleContainer}>
          <a
            href={repository.url}
            rel="noreferrer"
            target="_blank"
            className={styles.title}
          >
            {repository.name}
          </a>
        </div>

        <div className={styles.descriptionContainer}>
          <p>{repository.description}</p>
        </div>
      </div>

      <div className={styles.detailsContainer}>
        {repository.primaryLanguage && repository.primaryLanguage.name && (
          <div className={styles.languageContainer}>
            <GrStatusGoodSmall />
            {repository.primaryLanguage.name}
          </div>
        )}

        <div className={styles.starContainer}>
          <AiOutlineStar />
          {repository.stargazers && repository.stargazers.totalCount > 0
            ? repository.stargazers.totalCount
            : 0}
        </div>

        <div className={styles.forkCountContainer}>
          <GoRepoForked />
          {repository.forkCount}
        </div>

        <div className={styles.starContainer}>
          Created at {repository.createdAt}
        </div>
      </div>
    </div>
  );
}
