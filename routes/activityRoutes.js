const express = require('express');
const { getAllActivities } = require('../controllers/activityController');
const router = express.Router();

router.get('/', getAllActivities);

module.exports = router;
