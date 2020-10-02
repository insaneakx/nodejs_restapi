var express = require("express");
var app = express();

app.listen(3000, () => {
    console.log("Server running on port 3000");
});

var booksData = require('./booksData.json');

function findBook(isbn) {
    const result = booksData.filter(obj => {
        return obj.isbn === isbn;
    });

    return result;
}

app.get("/init", (req, res, next) => {
    res.json(["Tony", "Lisa", "Michael", "Ginger", "Food"]);
});

app.get('/search', function (req, res) {
    const result = findBook(req.query.isbn);

    res.send(result);
});