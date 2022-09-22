const app = require("express")();
const https = require("https");
const bodyParser = require("body-parser");
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}))

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
    // live data using an API
// get dynamic data based on what the user typed into
const query = req.body.cityName;
const apiKey = "ae3ec07b8a7fcd5cf0d99af0f0e43c7f";
const unit = "metric";
const url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=${unit}&appid=${apiKey}`;
// making HTTP get request to get data as a JSON format
https.get(url, (response) => {
  console.log(response.statusCode);

  // get data as a JSON format
  response.on("data", (data) => {
    // parsing it and fetching the specific items that we want
    const weatherData = JSON.parse(data);
    const temp = weatherData.main.temp;
    const weatherDesc = weatherData.weather[0].description;
    const weatherIcon = weatherData.weather[0].icon;
    const weatherIconURL = `https://openweathermap.org/img/wn/${weatherIcon}@2x.png`;
    // sending it back to the browser using the HTML that we want to write
    res.write(`<p>The weather is currently ${weatherDesc}.</p>`);
    res.write(
      `<h1>The temperature in ${query} is ${temp} degrees Celcius.</h1>`
    );
    res.write(`<img src="${weatherIconURL}">`);
    res.send();
  });
});
})

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
