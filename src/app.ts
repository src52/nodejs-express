import express from 'express';
const app = express();
const port = 52524;

app.get('/', (req, res) => {
    res.json({body: `We're running Express on port ${port}!`, married: false});
});

app.listen(port, () => {
    return console.log(`Express is running on http://localhost:${port}`);
});
