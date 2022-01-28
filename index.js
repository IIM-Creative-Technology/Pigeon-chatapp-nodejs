const express = require('express')

const app = express()
const PORT = 3000 || process.env.PORT
const path = require('path')

app.listen(PORT, () => console.log(`App is live on port ${PORT}`))  //Paramétrer serveur sur port 3000

app.use(express.static(path.join(__dirname, 'public')))