const { Router } = require('express');
const router = Router();

const {getdevices, uploadMeasures, createDevices} = require('../controllers/index.controller') 

module.exports = router;

router.get('/devices',getdevices)
router.post('/devices/:name.:location',createDevices)
router.post('/measure/:name.:measure.:time',uploadMeasures)