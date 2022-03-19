import Input from 'components/Input';
import { FiSearch } from 'react-icons/fi';
import styles from './styles.module.scss';

export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <h2>Repositories</h2>
      <h6>Here is the list of all the repositories</h6>

      <div className={styles.searchContainer}>
        <Input icon={FiSearch} placeholder="Search for an username..." />
      </div>
    </div>
  );
}
