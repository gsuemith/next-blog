
import Link from 'next/Link'
import ArticleList from '../components/ArticleList'
import Footer from '../components/Footer'
import Meta from '../components/Meta'
import {server} from '../config'
import styles from '../styles/Home.module.css'

export default function Home({ posts }) {
  
  return (
    <>
    <Meta />
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.title}>
          <h4><a>NEXT.js</a> Blog</h4>
        </div>

        <ArticleList posts={posts} />
       
      </main>

      <Footer/>
    </div>
    </>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/posts`)
  const posts = await res.json()

  return {
    props: {
      posts
    }
  }
}