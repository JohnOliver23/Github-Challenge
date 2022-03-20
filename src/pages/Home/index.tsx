import React, { useState } from 'react';
import Input from 'components/Input';
import { FiSearch } from 'react-icons/fi';
import { Button } from 'components/Button/Button';
import { getRepositories } from 'services/api';
import RepositoryList from 'components/RepositoryList';
import { IRepository } from 'util/interfaces';
import styles from './styles.module.scss';

export default function Home() {
  const [repositories, setRepositories] = useState<IRepository[]>([]);
  const [search, setSearch] = useState('');
  const [textNotFound, setTextNotFound] = useState('Search by Username');

  const searchByUsername = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = await getRepositories(search);
    if (data.data.user && data.data.user.repositories.nodes.length) {
      setRepositories(data.data.user.repositories.nodes);
    } else {
      setTextNotFound(
        `Could not find repositories with the username of ${search} `,
      );
      setRepositories([]);
    }
  };

  return (
    <div className={styles.homeContainer}>
      <h2>Repositories</h2>
      <h6>Here is the list of all the repositories</h6>

      <form className={styles.searchContainer} onSubmit={searchByUsername}>
        <Input
          onChange={e => setSearch(e.target.value)}
          icon={FiSearch}
          placeholder="Search by username..."
        />

        <Button disabled={!search} type="submit" width={50}>
          <FiSearch size={20} color="var(--white)" />
        </Button>
      </form>

      {repositories.length === 0 ? (
        <p>{textNotFound}</p>
      ) : (
        <RepositoryList repositories={repositories} />
      )}
    </div>
  );
}
