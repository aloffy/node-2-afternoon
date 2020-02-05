const express = require('express')
const ctrl = require('./controllers/messages_controller')
const app = express()
const PORT = 3001

app.use(express.json())
app.use(express.static(__dirname + '/../public/build'))

app.get('/api/messages', ctrl.read)
app.post('/api/messages', ctrl.create)
app.put('/api/messages/:id', ctrl.update)
app.delete('/api/messages/:id', ctrl.delete)

app.listen(PORT, () => console.log(`server running on port ${PORT}`))