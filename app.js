const express = require('express');
const routes = require('./routes');
const { connection } = require('./models/user')
const app = express();


app.use(express.json())
app.use('/', routes)

//const

const port = process.env.PORT || 3000

app.listen(port, () => console.log(`listening on port ${port}`))