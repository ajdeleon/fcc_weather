const readline = require('readline')
const axios = require('axios')
const key = require('./keys.js')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

rl.question('What is your zip code?', async zip => {
  // axios request to weather api
  try {
    const data = await axios.get(
      'http://api.openweathermap.org/data/2.5/weather',
      {
        params: {
          zip,
          APPID: key,
        },
      }
    )
    console.log(data.data)
  } catch (err) {
    console.log(err)
  }
  rl.close()
})
