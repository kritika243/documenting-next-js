import mongoose from 'mongoose'

function initDb() {
  // on re-starting / re-loading the app - the connection to database must have been already made, therefore if the connection already exists- then simply return from the function and do not re-do the whole thing
  if (mongoose.connections[0].readyState) {
    console.log('already connected to database')
    return
  }
  mongoose.connect(process.env.MONG0_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  mongoose.connection.on('connected', () => {
    console.log('connected to mongo')
  })
  mongoose.connection.on('error', (err) => {
    console.log('error in connectng')
    console.log(err)
  })
}

export default initDb
