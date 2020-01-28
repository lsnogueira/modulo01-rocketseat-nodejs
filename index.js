const express = require('express');

const server = express();

server.get('/teste', (req, res) => {
  return res.json({ message: 'assento de foguete' });
});

server.listen(3000);