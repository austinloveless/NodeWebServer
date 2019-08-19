const express = require('express'); 
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const port = 3000 || process.env.PORT;

app.get('/', (req, res) => {
    res.send('NodeServer'); 
}); 

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})