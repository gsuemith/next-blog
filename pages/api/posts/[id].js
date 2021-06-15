const db = require('../../../data/db-config')

export default async function handler(req, res) {
  const { id } = req.query

  const post = await db
    .select('p.id', 'a.name as author', 'p.title', 'p.body')
    .from('posts as p')
    .join('authors as a', 'a.id', 'p.author_id')
    .where('p.id', id)
    .first()
    
  if (post) {
    res.status(200).json(post)
  } else {
    res.status(404).json({ message: `Post with id ${id} not found`})
  }
}