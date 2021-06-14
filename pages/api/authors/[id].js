const db = require('../../../data/db-config')

export default async function (req, res) {
  const { id } = req.query
  const author = await db('authors').where({ id })
  if (author) {
    res.status(200).json(author)
  } else {
    res.status(404).json({ message: `Author with id ${id} not found`})
  }
}