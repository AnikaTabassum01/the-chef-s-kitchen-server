const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) =>{
    res.send('Data is coming')
});

app.listen(port, () => {
    console.log(`Data API is running on port: ${port}`)
})