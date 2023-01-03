import { ActiveLink } from '../ActiveLink';
import { SignInButton } from '../SingInButton';
import styles from './styles.module.scss';


export function Header(){
    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <img src="/images/logo.svg" alt="ig.news"/>
                <nav>
                    <ActiveLink href="/" activeClassName={styles.active}>
                        <p>Home</p>
                    </ActiveLink>
                    <ActiveLink href="/posts" activeClassName={styles.active}>
                        <p>Posts</p>
                    </ActiveLink>
                </nav>
                <SignInButton></SignInButton>
            </div>
        </header>
    )
}