const readline = require('readline')
const axios = require('axios')
const chalk = require('chalk')
const key = require('./keys.js')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

rl.question('What is your zip code? ', async zip => {
  // axios request to weather api
  try {
    const {
      data: {
        weather: [{ description }],
        main: { temp, temp_min, temp_max },
        sys: { sunrise, sunset },
        name,
      },
    } = await axios.get('http://api.openweathermap.org/data/2.5/weather', {
      params: {
        zip,
        APPID: key,
        units: 'imperial',
      },
    })
    const options = { timeZoneName: 'short' }
    console.log(chalk`
      {bold
      {underline The current temperature in ${name} is: {inverse  ${temp}°f }}

      {cyanBright Min temp: {inverse  ${temp_min}°f }}
      {redBright Max temp: {inverse  ${temp_max}°f }}

      {yellow Sunrise: {inverse  ${new Date(sunrise * 1000).toLocaleTimeString(
        'en-US',
        options
      )} }}
      {magentaBright Sunset:  {inverse  ${new Date(
        sunset * 1000
      ).toLocaleTimeString('en-US', options)} }}
      }
    `)

    // temp, description, high, low, sunset, sunrise
  } catch (err) {
    console.log(err)
  }
  rl.close()
})
