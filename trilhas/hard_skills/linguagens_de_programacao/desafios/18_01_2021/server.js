const express = require('express');

const PORT = 8080;

const app = express();

app.use(express.static());

app.listen(PORT);
