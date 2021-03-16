const express = require('express');
const route = express.Router();
const adminController = require('../controllers/adminController');

//? Route get from admin controllers
route.get('/dashboard', adminController.viewDashboard);
route.get('/category', adminController.viewCategory);
route.get('/item', adminController.viewItem);
route.get('/bank', adminController.viewBank);
route.get('/booking', adminController.viewBooking);

module.exports = route;
