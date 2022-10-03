const express = require('express');
const router = express.Router();
const {getAllUser,getUser, addUser, updateUser} = require('../controller/usersController');

router.route('/').get(getAllUser).post(addUser);
router.route('/:id').get(getUser).patch(updateUser);



module.exports = router;