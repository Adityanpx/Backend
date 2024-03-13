require('dotenv').config()
const express = require('express');

const app = express();

const port = 4000;

const githunData={
    
}

app.get('/', (req, res) => {
    res.send("Hello, world!");
});

app.get('/twitter', (req, res) => {
    res.send("Aditya");
});

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`);
});
