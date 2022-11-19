const app = require('express');
const router = app.Router;
const todoController = require('../controllers/todoController');

//get
router.get('/', todoController.getAll);
router.get('/:id', todoController.get);

//post
router.post('/', todoController.add);

//update
router.put('/:id', todoController.update);

//delete
router.delete('/:id', todoController.delete);

module.exports = router;