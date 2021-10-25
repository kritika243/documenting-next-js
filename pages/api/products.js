import initDb from '../../helpers/initDb'

initDb()
export default (req, res) => {
  res.json({ message: 'Hello World' })
}
