import Link from 'next/Link'
// import { useRouter } from 'next/router'
import { server } from '../../../config'

const posts = ({ post }) => {
  // const router = useRouter()
  // const { id } = router.query
  
  return (
    <div>
      <h1>{post.title}</h1>
      <h2>{post.author}</h2>
      <p>{post.body}</p>
      <Link href='/'>Go Back</Link>
    </div>
  )
}

export const getStaticProps = async (context) => {
  const res = await fetch(`${server}/api/posts/${context.params.id}`)

  const post = await res.json()

  return {
    props: {
      post
    }
  }
}

export const getStaticPaths = async () => {
  const res = await fetch(`${server}/api/posts`)

  const posts = await res.json()
  const ids = posts.map(post => post.id)
  const paths = ids.map(id => ({ params: { id: id.toString() }}))
  return { 
    paths, 
    fallback: false 
  }
}

export default posts
