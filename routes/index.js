const newsRoute = require('./NewRoute');
const siteRoute = require('./SiteRoute');
const courseRoute = require('./CourseRoute');

function routes(app) {
    app.use('/news', newsRoute);
    app.use('/course', courseRoute);
    app.use('/', siteRoute);
}

module.exports = routes;
