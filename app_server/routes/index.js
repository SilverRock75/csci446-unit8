var express = require('express');
var router = express.Router();
var ctrlcourses = require('../controllers/courses');
var ctrlOthers = require('../controllers/others');

/* courses pages */
router.get('/', ctrlcourses.homelist);
router.get('/course', ctrlcourses.courseInfo);
router.get('/course/review/new', ctrlcourses.addReview);

/* Other pages */
//router.get('/about', ctrlOthers.about);

module.exports = router;
