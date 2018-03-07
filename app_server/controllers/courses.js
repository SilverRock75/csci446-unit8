/* GET 'home' page */
module.exports.homelist = function(req, res) {
    res.render('courses-list', {
        title: 'Course Organizer',
        pageHeader: {
            title: 'Course Organizer',
            strapline: 'Helping you to not forget!',
        },
        courses: [{
            name: 'CSCI-446',
            title: 'Web Apps',
            prof: 'Cyndi Rader',
        }, {
            name: 'CSCI-250',
            title: 'Building a Sensor System',
            prof: 'Wendy Fisher',
        }, {
            name: 'EENG-284',
            title: 'Digital Logic',
            prof: 'Vibhuti Dave',
        }]
    });
};

/* GET 'course info' page */
module.exports.courseInfo = function(req, res) {
    res.render('course-info', {
        title: 'Web Apps',
        pageHeader: {
            title: 'Web Apps',
            name: 'CSCI-446'
        },
        course: {
            name: 'CSCI-446',
            title: 'Web Apps',
            prof: 'Cyndi Rader',
            address: '125 High Street, Reading, RG6 1PS',
            credit: 3,
            time: 'Online',
            loc: 'No Room Assigned',
            assignments: [{
              name: 'Unit 7',
              duedate: '2/28/18',
              point: 25,
              status: 'Submitted'
            }, {
              name: 'Unit 8',
              duedate: '3/7/18',
              point: 66,
              status: 'In Progress'
            }],
            openingTimes: [{
                days: 'Monday - Friday',
                opening: '7:00am',
                closing: '7:00pm',
                closed: false
            }, {
                days: 'Saturday',
                opening: '8:00am',
                closing: '5:00pm',
                closed: false
            }, {
                days: 'Sunday',
                closed: true
            }],
        }
    });
};

/* GET 'Add review' page */
module.exports.addReview = function(req, res) {
    res.render('course-review-form', {
        title: 'Add Assignemnt',
        pageHeader: {
            class: 'CSCI-446'
        }
    });
};
