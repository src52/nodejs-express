import express from 'express';
const app = express();
const port = 52524;

app.get('/', (req, res) => {
    res.json({body: `The express server is running on port ${port}!`, married: false});
});

app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
