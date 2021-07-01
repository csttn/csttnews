import { SignInButton } from '../SignInButton';
import styles from './styles.module.scss';

import Link from 'next/link';

import { ActiveLink } from '../activeLink';
import { useRouter } from 'next/router';

export function Header() {
  const { asPath } = useRouter();

  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <div>
          <h1 className={styles.titleWord}>csttnews</h1>
        </div>
        <nav>
          <ActiveLink href='/' activeClassName={styles.active}>
            <a>Home</a>
          </ActiveLink>

          <ActiveLink href='/posts' prefetch activeClassName={styles.active}>
            <a className={asPath === '/posts' ? styles.active : ''}>Posts</a>
          </ActiveLink>
        </nav>

        <SignInButton />
      </div>
    </header>
  );
}
