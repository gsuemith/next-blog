import Link from 'next/Link'
import styles from '../styles/List.module.css'

const ArticleList = ({ posts }) => {
  return (
    <>
    {
      posts.map(post => {
        const { title, author, id } = post

        return (
        <Link href="/posts/[id]" as={`/posts/${id}`} key={id} className={styles.grid}>
          <div className={styles.card}>
            <h2>{title}</h2>
            <h4>by {author} &rarr;</h4>
          </div>
        </Link>
        )
      })
    }
    </>
  )
}

export default ArticleList
