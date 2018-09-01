const express = require('express');
const routes = require('./routes');
const { syncAndSeed } = require('./models/user')
const app = express();


app.use(express.json())
app.use('/', routes)

const init = () => {
   return syncAndSeed()
}

init()

const port = process.env.PORT || 3000

app.listen(port, () => console.log(`listening on port ${port}`))