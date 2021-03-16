module.exports = {
  //Control views on admin 
  viewDashboard: (req, res) => {
    res.render('admin/dashboard/view_dashboard');
  },
  viewCategory: (req, res) => {
    res.render('admin/category/view_category');
  },
  viewItem: (req, res) => {
    res.render('admin/item/view_item');
  },
  viewBank: (req, res) => {
    res.render('admin/bank/view_bank');
  },
  viewBooking: (req, res) => {
    res.render('admin/booking/view_booking');
  },
};
