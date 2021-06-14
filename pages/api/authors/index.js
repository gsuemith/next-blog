const db = require('../../../data/db-config')

export default async function handler(req, res) {
  const authors = await db('authors')

  res.status(200).json(authors)
}