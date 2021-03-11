const express = require('express');
const route = express.Router();
const adminController = require('../controllers/adminController');

route.get('/dashboard', adminController.viewDashboard);

module.exports = route;
