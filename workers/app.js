const express = require('express');
const path = require('path');

const app = express();

const port = 3000;

app.use(express.static(path.join(__dirname, '/public/')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/service-workers.html'));
});

const fatherTedRouter = require('./public/js/routes/father-ted-routes')();

app.use('/fatherted', fatherTedRouter);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
});
