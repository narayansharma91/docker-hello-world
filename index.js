const express = require('express');
const app = express();
app.use('/', (req, res) => {
    res.send('hello world');
});
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log('application running ' +port)
})