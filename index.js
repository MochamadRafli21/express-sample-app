import express from 'express';
const app = express();

app.get('/', (req, res) => {
    res.send('Mochamad Rafli');
})

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
