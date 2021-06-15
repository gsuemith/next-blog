const db = require('../../../data/db-config')

export default async function handler(req, res) {
  const posts = await db
    .select('p.id', 'a.name as author', 'p.title', 'p.body')
    .from('posts as p')
    .join('authors as a', 'a.id', 'p.author_id')
    
  res.status(200).json(posts)
}