const express = require('express');
const app = express();
const { readdirSync, readFileSync, mkdirSync, writeFileSync } = require('fs');
const { join } = require('path');
const cfg = require('../config.json');
const port = cfg.port;

function saveMsg(newdata) {
    const dirpath = join(cfg.path,cfg.dir);
    const filepath = join(cfg.path,cfg.dir,cfg.file);
    let data = [];

    try {
        readdirSync(dirpath);
        const file = readFileSync(filepath, 'utf-8');
        data = JSON.parse(file);
    } catch (error) {
        mkdirSync(dirpath);
    } finally {
        data.push(newdata);
        writeFileSync(filepath,JSON.stringify(data));
    }
}

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.post('/api/contact', async (req, res) => {

    const data = await req.body;
    await saveMsg(data);

    res.redirect('http://octafox.it');
    // res.json({ status: "ok", data });
});

app.listen(port, () => { console.log(`[API] Started on port ${port}`) });