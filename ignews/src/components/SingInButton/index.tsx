import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';
import { useSession, signIn, signOut } from "next-auth/react"


import styles from './styles.module.scss';

export function SignInButton() {
    const { data: session } = useSession()
    return session ? (
        <button
            type="button"
            className={styles.singInButton}
            onClick={() => signOut()}
        >
            <FaGithub color='#04d361' />
            {session?.user?.name}
            <FiX color='#737380' className={styles.closeIcon} />
        </button>
    ) :
        (
            <button
                type="button"
                className={styles.singInButton}
                onClick={() => signIn('github')}
            >
                <FaGithub color='#eda417' />
                Sing in with GitHub
            </button>
        )
}