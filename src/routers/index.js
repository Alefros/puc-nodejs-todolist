const app = require('express');
const router = app.Router;


router.get('/', (req, res) => {
    console.log('Hello World!');
    res.send('Hello');
});

module.exports = router;