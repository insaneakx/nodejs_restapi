var express = require("express");
var app = express();

app.get("/url", (req, res, next) => {
    res.json(["Tony", "Lisa", "Michael", "Ginger", "Food"]);
});

app.get('/search', function (req, res) {
    setImmediate(function () {
        try {
            res.send('Success: ' + req.query.value)
        } catch (e) {
            res.status(400).send('Invalid JSON string')
        }
    })
})

app.listen(3000, () => {
    console.log("Server running on port 3000");
});