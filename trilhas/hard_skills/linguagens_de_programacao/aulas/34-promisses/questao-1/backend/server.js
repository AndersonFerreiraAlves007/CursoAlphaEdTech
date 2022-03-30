const express = require('express')
const cors = require('cors')

const PORT = 3333

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

async function wait(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}

app.get('/generate_random_number', async (req, res) => {
  const random_number = parseInt(Math.random() * 100, 10)

  const random_number_time = parseInt(Math.random() * 5 + 1, 10)

  await wait(random_number_time * 1000)

  res.json({
    random_number
  })

})

app.listen(PORT)
