# Weather CLI tool

This little program uses your zip code to pull weather data from [Open Weather API](https://openweathermap.org/api)

You will need to add your api key from Open Weather to a file called `keys.js`

`example_key.js` has an example of how you should export that key. 

This file is already in `.gitignore` so that you don't accidentally push your key to github. Be careful!

In the `package.json` there is a `bin` set up to link this program to the command `weather`. You can change this if you'd like. For more info on how this works, see the [npm bin documentation](https://docs.npmjs.com/files/package.json#bin)
