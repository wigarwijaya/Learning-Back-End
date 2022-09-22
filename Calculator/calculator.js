const app = require("express")();
const bodyParser = require("body-parser");
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
})

app.post("/", (req, res) => {
    // console.log(req.body);
    // console.log(req.body.num1);
    // console.log(req.body.num2);
    let num1 = Number(req.body.n1);
    let num2 = Number(req.body.n2);
    let result = num1 * num2;
    res.send(`The result is ${result}`);
})

app.get("/bmicalculator", (req, res) => {
    res.sendFile(__dirname + "/bmiCalculator.html")
})

app.post("/bmicalculator", (req, res) => {
    let weight = parseFloat(req.body.weight);
    let height = parseFloat(req.body.height);
    let bmi = weight / Math.pow(height, 2);
    let bmiResult = Math.round(bmi);
    res.send(`Your BMI is ${bmiResult}`);
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})

