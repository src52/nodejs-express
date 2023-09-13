import express from 'express';
const app = express();
const port = 52524;

app.get('/', (req, res) => {
    res.json({message: 'Express is running on port 52524!'});
});

app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});