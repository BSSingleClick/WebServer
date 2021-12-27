const express = require('express');
const app = express();

app.get('/pcdwnld/:id', (req, res) => {
    res.render('pcdwn.ejs', { id: req.params.id })
})

app.get('/dwn/:id', (req, res) => {
    console.log(req.url.replace('/dwn/', ''));
    res.json({ok: true});
})

app.listen(8679);