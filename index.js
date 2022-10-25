const express = require("express");
const app = express();
const arithmeticFunctions = require("./arithmeticFunctions");

app.use(express.urlencoded({ extended: false }));



app.get("/arithmeticCalculations", function (req, res) {
    res.send("Arithmetic Calculations");
});

app.post('/arithmeticCalculations', function (req, res) {
   
    if (req.body.operation === "add") {
        let result = arithmeticFunctions.add(Number(req.body.value_1), Number(req.body.value_2));
        let print = {Operation: req.body.operation, Value_1: Number(req.body.value_1), Value_2: Number(req.body.value_2), Result: result};
        console.log(print);
        res.send(print);    
    };

    if (req.body.operation === "sub") {
        let result = arithmeticFunctions.sub(Number(req.body.value_1), Number(req.body.value_2));
        let print = {Operation: req.body.operation, Value_1: Number(req.body.value_1), Value_2: Number(req.body.value_2), Result: result};
        console.log(print);
        res.send(print);
    };

    if (req.body.operation === "mult") {
        let result = arithmeticFunctions.mult(Number(req.body.value_1), Number(req.body.value_2));
        let print = {Operation: req.body.operation, Value_1: Number(req.body.value_1), Value_2: Number(req.body.value_2), Result: result};
        console.log(print);
        res.send(print);
    };

    if (req.body.operation === "div") {
        let result = arithmeticFunctions.div(Number(req.body.value_1), Number(req.body.value_2));
        let print = {Operation: req.body.operation, Value_1: Number(req.body.value_1), Value_2: Number(req.body.value_2), Result: result};
        console.log(print);
        res.send(print);
    };
});


app.listen(3000, function () {
    console.log("Server running on port 3000...")

});