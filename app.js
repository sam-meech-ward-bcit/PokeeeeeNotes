import express from 'express'
// import * as database from './fakeDatabase.js'
// import * as database from './mysqlDatabase.js'
import database from './mysqlDatabase.js'

const app = express()
app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true }))

app.use(express.static('public'))


app.get('/', async (req, res) => {
  const notes = await database.getNotes()
  res.render('index.ejs', {pokeNotes: notes})
})




app.post('/createPokeNote', async (req, res) => {
  const {title, content} = req.body

  await database.addNote(title, content)

  res.redirect('/')
})

app.post('/deletePokeNote', async (req, res) => {
  const {id} = req.body

  await database.deleteNote(id)
  
  res.redirect('/')
})

// Create a note
// List all notes
// view a single note
// delete a note

const port = process.env.PORT || 8080
app.listen(port, () => {
  console.log('Server is running on port ', port)
})
