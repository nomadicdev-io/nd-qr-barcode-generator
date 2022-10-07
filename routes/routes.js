const express = require('express');
const router = express.Router();
const {getAllUser,getUser, addUser, updateUser, modifyAll, generateQr} = require('../controller/usersController');

router.route('/').get(getAllUser).post(addUser);
router.route('/:id').get(getUser).patch(updateUser);
router.route('/test').post(modifyAll);
router.route('/qr').post(generateQr);

module.exports = router;