import { GetStaticProps } from 'next';
import Head from 'next/head';
import { client } from '../../services/prismic';
import styles from './styles.module.scss';
import Link from 'next/dist/client/link';

type Post = {
    slug:string,
    title:string,
    excerpt:string,
    updatedAt: string,
}

interface PostProps{
    posts:Post
}

export default function Posts({posts}: PostProps){
    return (
        <>
        <Head>
            <title>Posts | IgNews</title>
        </Head>

        <main className={styles.container}>
            <div className={styles.posts}>
                {posts.map(post => (
                    <Link key={post.slug} href={`/posts/${post.slug}`}>
                        <time>{post.updatedAt}</time>
                        <strong>{post.title}</strong>
                        <p>{post.excerpt}</p>
                    </Link>
                ))}
            </div>
        </main>
        </>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    const prismic = client;

    const response = await prismic.getAllByType('publication', {
        fetch:['publication.title','publication.content'],
        pageSize:100
    })

    const posts = response.map(post => {
        return {
            slug: post.uid,
            title: post.data.title,
            excerpt: post.data.content.find(content=>content.type == 'paragraph')?.text ?? '',
            updatedAt: new Date(post.last_publication_date).toLocaleDateString('pt-BR',{
                day: '2-digit',
                month: 'long',
                year:'numeric'
            })
        }
    })

    return {
        props: {posts}
    }
}