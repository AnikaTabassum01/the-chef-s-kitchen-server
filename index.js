const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

const chefData = require('./Data/chefData.json');

app.get('/', (req, res) =>{
    res.send('Data is coming')
});

app.get('/chefData', (req, res) =>{
    res.send(chefData)
})

app.listen(port, () => {
    console.log(`Data API is running on port: ${port}`)
})