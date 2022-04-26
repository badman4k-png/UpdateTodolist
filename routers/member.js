const express = require('express');
const { getMember , Createmember, deleteMember } = require('../controllers/member')
const route = express.Router();

route.get('/',getMember);
route.post('/',Createmember);
route.delete('/:id',deleteMember);

module.exports = route;