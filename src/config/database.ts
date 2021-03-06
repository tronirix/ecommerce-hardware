import mongoose from 'mongoose'

export default
class Database {
  url: string = process.env.MONGO_URL || 'mongodb://localhost/ecommerce'
  options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }

  public constructor () {
    mongoose.Promise = global.Promise
    mongoose.connect(this.url, this.options)
      .then(() => {
        console.log('Connected to Database')
      }).catch((err) => {
        console.log('Not Connected to Database ERROR! ', err)
      })
  }
}
