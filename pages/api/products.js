import initDb from '../../helpers/initDb'
import Product from '../../models/Product'
initDb()

export default (req, res) => {
  Product.find().then((products) => {
    res.status(200).json(products)
  })
}
