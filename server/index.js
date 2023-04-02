const express = require('express');
const app = express();
const PORT = 5000
app.get("/", (req, res) => {
    res.json({
        "message": "Started project with express js and testes with artillery !!"
    });
});


app.use('/api/sql', require('./routes/crud-postgress-sql'));
app.use('/api/nosql', require('./routes/crud-mongodb'));


app.listen(PORT, () => { console.log('Server is started with nodemone') });